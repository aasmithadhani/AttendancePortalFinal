import React from "react";

export default function validateInfoNew(values, page) {
  let errors = {};
  let c = 0;

  let regex3 = /^([0-9]){11}$/;
  let str3 = values.SapId;
  if (regex3.test(str3)) {
    console.log("it matched");
  } else {
    errors.SapId = "sap-id should have 11 digits";
    c++;
  }

  //   let regex4=  /^(?=.[0-9])(?=.[A-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  // let str4=values.password;
  // if (regex4.test(str4)) {
  //   console.log("it matched");
  // } else {
  //   errors.password = "1 UpperCase,1 Digit & 1 Special Character";
  //   c++;

  // }

  let regex4 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,}$/;
  let str4 = values.password;

  if (regex4.test(str4)) {
    console.log("it matched");
  } else {
    errors.password = "1 alphabet ,1 Digit & 1 Special Character";
    console.log(values.password);
    c++;
  }

  // if (c == 0) {
  //   alert("Success");
  // }
  return errors;
}
