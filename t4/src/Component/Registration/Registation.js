import { React } from "react";
import { Button, NavLink } from "react-bootstrap";
import { Formik, Form} from "formik";
import { Regform,initialValues,validateSchema,onSubmit } from "./RegForm";
import moment from"moment";
import axios from "axios";
import { useNavigate } from "react-router";
const date = moment().format('YYYY-MM-DD HH:mm:ss');


const Login = () => {
  const navigate=useNavigate();  
  const onSubmit = (values) => {
        debugger;
        let fData = new FormData();
        fData.append("name", values.name);
        fData.append("email", values.email);
        fData.append("pass",values.password);
        fData.append("tReg",date);
        axios({
          method:"post",
          url:"http://localhost/t4/src/Component/Registration/form.php",
          data: fData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response.response.data);
          });
        console.log("Form submit data", values);
        navigate('/');
      };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div>
          <h1>Registration</h1>
          {Regform('name')}
          {Regform('email')}
          {Regform('password')}
          <div><Button type='submit'>Submit</Button></div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
