import React, {useState} from 'react';
import {Form, Body, Main, Logo,} from './signupcss';
import  './signup.css';
import Footer from './Footer';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { regUser, getuname, getemail, getpassw } from '../utilities/form';

const Signup = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
  <div className='loback flex flex-col bg-slate-300'>
      <Body className=''>
        <Main className='w-1/2'>
            <Form className=' forform bg-slate-100'>
                <Logo ><img src={require("../../Images/logo.png")} alt="logo" /></Logo>
                <h1 className='text-black'>Sign Up to HiTech</h1>
                {/* <div className="labels mt-2 px-[5%] w-full flex flex-col items-start">
                  <label className='ml-2 text-black'>Full Name:</label>
                   <input  className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                   " type='text' placeholder='Enter your full Names'/>
                </div> */}
                <div className="labels mt-2 px-[5%] w-full flex flex-col  items-start">
                  <label className='ml-2 text-black'>Username:</label>
                    <input onInput={getuname} className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                    " type='text' placeholder='Enter your username'/>
                </div>
                <div className="labels mt-2 px-[5%] w-full flex flex-col  items-start">
                  <label className='ml-2 text-black'>Email:</label>
                   <input onInput={getemail} className="border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                    w-full" type='email' placeholder='Enter your Email'/>
                </div>
                <div className="labels mt-2 px-[5%] w-full flex flex-col  items-start">
                    <label className='ml-2 text-black'>Password:</label>
                    <input onInput={getpassw} className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                    " type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="Choose your password" required/>
                </div>
                <div className="label">
                <Checkbox {...label}  onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label className='text-black'>Show password</label>
                </div>
                <div className="label">
                    <Checkbox {...label} type="checkbox" required/>
                    <label className='text-black'>I agree with terms and conditions</label>
                </div>

                <div className="button">
                  <input onClick={regUser} className='signsub bg-blue-500 px-2 py-1 cursor-pointer' type='submit' value='Sign Up'  />
                </div>
                <div className="alt mt-2 text-black flex">
                    <p>Already have an account?</p>
                   <Link to='/login'><div  className='text-blue-500 ml-2'>Log in</div></Link> 
                </div>
            </Form>
        </Main>
        <div className='w-1/2'>
          <h1 className='text-3xl translate-y-[200px]'>Find and Buy your products while at home</h1>
          <img src={require('../../Images/download.png')} alt=''></img>
        </div>
      </Body>  
        <Footer />
    </div>
  );
}

export default Signup;