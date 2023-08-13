
import React from "react";
import { Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import moment from"moment";
import API from "../API/API";
const date = moment().format('YYYY-MM-DD HH:mm:ss');
export function messageForm(name,text,tag){
    return(
        <div className="d-flex justify-content-around border border-dark">
        <div className="border border-dark">{name}</div>
        <div className="border border-dark">{text}</div>
        <div className="border border-dark">{tag}</div>
      </div>
    )
}
function TextError(props) {
  return <div className="error">{props.children}</div>;
}
export function Regform(name,type) {
  return (
    <div className="mb-5">
      <Field
      className="form-control form-control-lg ml-10" component='input'
        name={name}
        placeholder={name}
        type={type}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );
}
export const initialValues = { name: "", text: "", tag: "" };
export const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Reg date", date);
};

export const validateSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});