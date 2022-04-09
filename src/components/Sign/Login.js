import React, { useState } from "react";
import { Form, Body, Main, Logo } from "./signupcss";
import "./signup.css";
import Footer from "./Footer";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Login = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [values, setValues] = useState({
      password: "",
      showPassword: false,
    });

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };  
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <Body className="">
        <Main className="w-full flex items-center justify-center">
          <Form className=" forform">
            <Logo>
              <img src={require("../../Images/logo.png")} alt="logo" />
            </Logo>
            <h1 className="text-black">Loog into HiTech</h1>
            <div className="labels">
              <TextField
                className="inmaterial insign"
                label="Username"
                id="standard-password-input"
                variant="filled"
                type="text"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="labels">
              <TextField
                className="inmaterial insign"
                label="Password"
                id="standard-password-input"
                variant="filled"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password}
                placeholder="Choose your password"
                required
              />
            </div>
            <div className="label">
              <Checkbox
                {...label}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                type="checkbox"
              />
              <label className="text-black">Show password</label>
            </div>
            <div className="button">
              <input
                className="signsub bg-blue-500"
                type="submit"
                value="Log In"
              />
            </div>
            <div className="alt text-black">
              <p>Don't have an account?</p>
              <Link to="/signup">
                <div className="text-blue-500">Sign Up</div>
              </Link>
            </div>
          </Form>
        </Main>
      </Body>
      <Footer />
    </div>
  );
};

export default Login;
