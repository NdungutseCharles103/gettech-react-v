import React, { useState } from "react";
import { Form, Body, Main, Logo } from "./signupcss";
import "./signup.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { logUser, getuname, getpassw } from "../utilities/form";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/fetchApi";
import styled from "styled-components";


const Login = () => {
  const dispatch = useDispatch()
  const { isFetching, error, status } = useSelector((state)=> state.user)
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
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
      setLoginInfo({...loginInfo, password: event.target.value})
    };  

    const handleClick = async(e)=>{
      e.preventDefault();
      await login(dispatch, loginInfo)
    }

  return (
    <>
      <div className="flex flex-col h-[80vh] justify-between">
        <Body className=" bg-slate-300">
          <Main className="w-full flex items-center justify-center">
            <Form className=" forform bg-slate-100" onSubmit={handleClick}>
              <Logo>
                <img src={require("../../Images/logo.png")} alt="logo" />
              </Logo>
              <h1 className="text-black">Log into HiTech</h1>
              <div className="labels mt-2 px-[5%] w-full flex flex-col  items-start">
                <label className="ml-2 text-black">Username:</label>
                <input onChange={e=> setLoginInfo({...loginInfo, username: e.target.value})}
                  className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                  "
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="labels mt-2 px-[5%] w-full flex flex-col  items-start">
                <label className="ml-2 text-black">Password:</label>
                <input
                  className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                  "
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  placeholder="Enter your password (6 char)"
                  min={6}
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
                <Input
                  className="signsub bg-blue-500 px-2 py-1 cursor-pointer"
                  type="submit"
                  value="Login"
                  disabled={isFetching}/>
              </div>
              <p className="text-red-400 text-center">{status.message}</p>
             {error && <p className="text-red-400">something went wrong</p>}
              <div className="alt mt-2 text-black flex">
                <p>Don't have an account?</p>
                <Link to="/signup">
                  <div className="text-blue-500 ml-2">Sign Up</div>
                </Link>
              </div>
            </Form>
          </Main>
        </Body>
      </div>
      <Footer />
    </>
  );
};

export default Login;

const Input = styled.input`
&:disabled{
  background-color: green;
  cursor: not-allowed;
}
`
