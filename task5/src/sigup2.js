import { useState } from "react";
import Joi from 'joi'

export default function Signup()
{
    const [user,setuser]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        password2:'',
    });
    const [errors,seterrors]=useState({});
    const schema={
        firstname:Joi.string().min(1).max(20).required(),
        lastname: Joi.string().required(),
        // email: Joi.string().email().required(),
        password:Joi.string().required().min(5).label("Password")
    }
    const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(user, 
            schema, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
          return null;
        } else {
          const errorData = {};
          for (let item of error.details) {
            const name = item.path[0];
            const message = item.message;
            errorData[name] = message;
          }
          console.log(errors);
          seterrors(errorData);
          return errorData;
        }
      };

      const handleSave = (event) => {
        const { name, value } = event.target;
        let errorData = { ...errors };
        const errorMessage = validateProperty(event);
        if (errorMessage) {
          errorData[name] = errorMessage;
        } else {
          delete errorData[name];
        }
        let userData = { ...user };
        userData[name] = value;
        setuser(userData);
        seterrors(errorData);
      };

      const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
      };
      const clearState = () => {
        setuser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          password2: "",
        });
      };
      console.log(user)
    return(
    <div className="container-md container1"><h2>SIGN UP PAGE </h2>
    <div className="row justify-content-center">
    <div className="col-sm-6 col1">
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >First Name</span>
    
  </div>
  <input
            type="text"
            name="firstname"
            className="form-control"
            
            onChange={handleSave}
          />
</div>
{errors.firstname && (
          <div className="alert alert-danger">
            {errors.firstname}
          </div>
        )}
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Last Name</span>
    
  </div>
  <input
            type="text"
            name="lastname"
            className="form-control"
                        onChange={handleSave}
          />
</div>
{errors.lastname && (
          <div className="alert alert-danger">
            {errors.lastname}
          </div>
        )}
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Mail</span>
    
  </div>
  <input
            type="text"
            name="email"
            className="form-control"
             onChange={handleSave}
            
          />
</div>
{errors.email && (
          <div className="alert alert-danger">
            {errors.email}
          </div>
        )}
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Password</span>
    
  </div>
  <input
            type="text"
            name="password"
            className="form-control"
                        onChange={handleSave}
            
          />
</div>
{errors.password && (
          <div className="alert alert-danger">
            {errors.password}
          </div>
        )}
    <div className="input-group mb-3">
  <div className="input-group-text">
  <span >Confrim Password</span>
    
  </div>
  <input
            type="text"
            name="password2"
            className="form-control"
            
            onChange={handleSave}
            
          />
</div>
{errors.password2 && (
          <div className="alert alert-danger">
            {errors.password2}
          </div>
        )}

<div className="btn">
          <button
            type="submit"
            onClick={validateForm}
            className="btn btn-success"
          >
            Success
          </button>
        </div>

    </div>
    
    <div className="col-sm-3 col2">
    <img className='images' src="https://www.shutterstock.com/image-photo/rajamundry-bridge-sunset-train-600w-1239643729.jpg"  alt='images'></img>
    </div>
  </div>
  </div>
)
}