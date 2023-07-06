import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppProvider } from "./context/app-context";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const useForm = (
  callback,
  validate,
  page,
  SetMyData,
  MyData,
  userToken,
  setUserToken
) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    DOB: "",
  });

  const navigate = useNavigate();

  //Setting the user in useState
  const [user, setUser] = useState();
  const [sap, setSap] = useState();

  const [loginStatus, setLoginStatus] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values, page));
    setIsSubmitting(true);

    const sap_id = e.target.SapId.value;
    const password = e.target.password.value;

    // fetching data of home when we login
    // const { SetMyData, MyData } = useApp();

    //Fetching the refresh and access tokens from the backend
    axios
      .post("https://attendanceportal.pythonanywhere.com/accounts/login/", {
        sap_id,
        password,
      })
      .then((res) => {
        if (res.errors) {
          console.log(res.errors);
          setLoginStatus(false);
        } else {
          console.log("Login Success");
          navigate("/teacher");
          setLoginStatus(true);
          console.log(res.config.data);
          const check = res.config.data;
          console.log(check, "check");
          setUser(check);
          console.log(check);
          setSap(sap_id);
          console.log(sap);
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.refresh)
          );
          console.log("Refresh token", res.data.refresh);
          const key1 = 2;
          localStorage.setItem("key1", key1);
          localStorage.setItem("accessToken", JSON.stringify(res.data.access));
          const Atoken = JSON.stringify(res.data.access);
          setUserToken(Atoken);
          console.log(Atoken);
          console.log(userToken, "usertoken");
          localStorage.setItem("user", JSON.stringify(res.config.data));
          //localStorage.setItem('user', JSON.stringify(user));

          loadHomeData(SetMyData, MyData);
        }
      });
  };

  // console.log(token);

  //-----------------------Reload-------------------------
  let token = 0;

  if (userToken.length == 0) {
    token = JSON.parse(localStorage.getItem("accessToken"));
  } else {
    token = JSON.parse(userToken);
  }
  useEffect(() => {
    return () => {
      console.log(userToken);
    };
  }, []);
  //-----------------------Reload-------------------------

  const loadHomeData = (SetMyData, MyData) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://attendanceportal.pythonanywhere.com/attendance/assigned-teacher-lecture/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data.Lectures);
        SetMyData(response.data.Lectures);
        console.log(MyData);
        localStorage.setItem(
          "MyDataLocal",
          JSON.stringify(response.data.Lectures)
        );
        console.log(JSON.parse(localStorage.getItem("MyDataLocal")));
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
