import { useState } from "react";
import * as Yup from 'yup'
import Joi from 'joi'
import { useFormik } from "formik";
import { API } from "./global";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup()
{
  const [status,setstatus]=useState('submit')
  const navigate=useNavigate()
  const login=()=>
  {
    navigate('/login')
  }
    const {values,handleChange,handleSubmit}=useFormik({
        initialValues:{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
          
        },
        onSubmit:(values)=>{
          setstatus('loding..') 
          console.log(values)
          fetch(`${API}/user`,{
            method:'POST',
            body:JSON.stringify(values),
            headers:{"Content-Type":"application/json"},
            
          }).then((data)=>
          {
        if(data.status===401)
        {
          setstatus("error")
        throw new Error(data.statusText)
        
        }
        setstatus("submited");
        
        return data.json();}).then(()=>{navigate("/home")
            
        // localStorage.setItem('token',data.token);
        })
        },validate:(values)=>{
          let {firstname,email,password}=values
          let errors={}
          if (!firstname) {
            errors.firstname = "firstname is required";
          } else if (firstname.length < 5) {
            errors.firstname = "firstname is not valid";
          }
          if (!password.length) {
            errors.password.length = "password.length Required";
          } else if ((password.length) > 8) {
            errors.password.length = "password.length should be greater than 8";
          }
          if (!email) {
            errors.email = "email is required";
          } 
          return errors;
        }
          })
    return(
    <div className="container-md container1"><h2>SIGN UP PAGE </h2>
    <div className="row justify-content-center">
    <div className="col-sm-6 col1">
    <form class="row g-3">
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >First Name</span>
    
  </div>
  <input
            type="text"
            name="firstname"
            className="form-control"
            value={values.firstname}
            onChange={handleChange}
            required/>
</div>

    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Last Name</span>
    
  </div>
  <input
            type="text"
            name="lastname"
            className="form-control"
            onChange={handleChange}
            required/>
</div>

    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Mail</span>
    
  </div>
  <input
            type="text"
            name="email"
            className="form-control"
            value={values.email}
            onChange={handleChange}
            
          />
</div>

    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Password</span>
    
  </div>
  <input
            type="text"
            name="password"
            className="form-control"
            value={values.password}
            onChange={handleChange}
            
          />
</div>

    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Confrim Password</span>
    
  </div>
  <input
            type="text"
            name="password2"
            className="form-control"
            value={values.password2}
            onChange={handleChange}
            
          />
</div>


<div className="btn">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-success"
          >
            Success {status}
          </button>
        </div>

    </form>
    </div>
  
    
    <div className="col-sm-3 col2">
    <img className='images' src="https://www.shutterstock.com/image-photo/rajamundry-bridge-sunset-train-600w-1239643729.jpg"  alt='images'></img>
    <button onClick={login}>Login Page</button>
    </div>
  </div>
  </div>
)
}