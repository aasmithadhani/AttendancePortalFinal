import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Teacher from "./Pages/Teacher";
import Class from "./Pages/Class";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherNew from "./Pages/TeacherNew";
import { useState } from "react";
import TeacherNewData from "./Pages/TeacherNewData";
import ForgotPassword from "./Pages/ForgotPassword";
import Profile from "./Pages/Profile";
import Attendance from "./Pages/Attendance";
import ProfileNew from "./Pages/ProfileNew";
import AttendanceNew from "./Pages/AttendanceNew";

import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RangeDownload from "./Pages/RangeDownload";
import Dashboard from "./Pages/Dashboard";
function App() {
  // const [superSearch,setSuperSearch] = useState({});
  // const [selectedNews, setSelectedNews] = useState({});

  const PrivateRoute1 = () => {
    let auth = localStorage.getItem("accessToken");
    console.log(auth);

    return auth ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route element={<PrivateRoute />} path="/teacher">
          <Route path="/teacher" element={<TeacherNewData />}></Route>
        </Route>
        <Route element={<PrivateRoute />} path="/class/:publishedAt">
          <Route path="/class/:publishedAt" element={<Class />}></Route>
        </Route>
        <Route element={<PrivateRoute />} path="/profile">
          <Route path="/profile" element={<ProfileNew />}></Route>
        </Route>
        <Route element={<PrivateRoute />} path="/attendance">
          <Route path="/attendance" element={<AttendanceNew />}></Route>
        </Route>
        <Route element={<PrivateRoute />} path="/download">
          <Route path="/download" element={<Dashboard />}></Route>
        </Route>
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
