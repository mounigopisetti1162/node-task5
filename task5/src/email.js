import { API } from "./global";
import * as Yup from "yup";
import {  toast } from 'react-toastify';

import { Formik, Form, Field, ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";

export default function Email()
{
    const nav=useNavigate()

    const onSubmit=(values)=>{
        fetch(`${API}/forgot_pass`,{
        method:"POST",
        body:JSON.stringify(values),
        headers:{"Content-type":"application/json"},
    }).then((data)=> data.json()).then(()=>{
            // console.log(data);
         
            
            toast("Link Sent to mail")
        })
        console.log(values);
  
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
      });
      const initialValues = {
        email: "",
      };
const renderError = (message) => <p className="help is-danger">{message}</p>;

return(
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => {
       onSubmit(values);
      console.log(values)
    }}
  >
    <div>
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
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
          </div>
          
          <button type="submit" className="btn btn-primary" 
          >
            Submit
          </button>
          </Form>
          </div>
          </Formik>
)
}