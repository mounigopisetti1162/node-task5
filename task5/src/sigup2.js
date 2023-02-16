import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "./global";

import { Formik, Form, Field, ErrorMessage } from "formik";

const ReviewForm = () => {

  const [status,setstatus]=useState('submit')
  const navigate=useNavigate()

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("name is man"),
    email: Yup.string().email().required(),
    lastname: Yup.string().required(),
    review: Yup.string().required(),
    password: Yup.string().min(8).max(50).required(),
    confrimpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm Password is required")
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confrimpassword: "",
  };

  const onSubmit = (values) => {
    
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
    }
  
    const renderError = (message) => <p className="help is-danger">{message}</p>;
  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ (values, { resetForm }) => {
         onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
          <div className="field">
            <label className="label" htmlFor="firstname">
              Full name
            </label>
            <div className="control">
              <Field
                name="firstname"
                type="text"
                className="input"
                placeholder="Full name"
              />
              <ErrorMessage name="firstname" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <Field
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
              />
              <ErrorMessage name="email" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="lastname">
            lastname
            </label>
            <div className="control">
              <Field
                name="lastname"
                type="text"
                className="input"
                placeholder="Title"
              />
              <ErrorMessage name="lastname" render={renderError} />
            </div>
          </div>
      
          <div className="field">
            <label className="label" htmlFor="password">
              password
            </label>
            <div className="control">
              <Field
                name="password"
                type="number"
                className="input"
                placeholder="password"
              />
              <ErrorMessage name="password" render={renderError} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="confrimpassword">
             Confrim password
            </label>
            <div className="control">
              <Field
                name="confrimpassword"
                type="number"
                className="input"
                placeholder="confrimpassword"
              />
              <ErrorMessage name="confrimpassword" render={renderError} />
            </div>
          </div>
      
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>

      <div className="login">
        <Link to='/login'>Alredy had an account</Link>
      </div>
    </Formik>
    
  )
};

export default ReviewForm;