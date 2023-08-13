import { React } from "react";
import {messageForm, tagWord} from "./Message";
import API from "../API/API";
import { Field,reduxForm } from "redux-form";
import moment from"moment";
import axios from "axios";

const date = moment().format("YY-MM-DD HH:mm:ss");
const WindowForm= (props) => { 
  return (
    <div className="mb-3 d-flex justify-content-evenly">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-5">
        <label>Name</label>
          <Field className="form-control form-control-lg ml-10" component='input' name={"name"} placeholder="User name" /></div>
        <div className="mb-5">
          <label>Text</label>
          <Field className="form-control form-control-lg"component='input' name={"text"} placeholder="text"/>
          </div>
          <div className="d-flex justify-content-evenly">
          <button  type="submit">Submit</button>
          </div>
      </form>
  </div>
  );
};
const WindowReduxForm = reduxForm({ form: "message" })(WindowForm);

const Window= (props) => {
debugger;
  const messageData = props.message.Message;
  const messageList = messageData.map((el) =>
    messageForm(el.name, el.text,el.time)
  );
  function onSubmit(formData){
    const tag=tagWord(formData.text);
    let fData = new FormData();  
        fData.append("name",formData.name);
        fData.append("text",formData.text);
        fData.append("tag",tag);
        fData.append('time',date);
        API.getForm(fData)
        API.getMessage(props.messageAC)
      } 
  return (
    <div className="col-sm my-5">
     <div className="mx-auto mw-100" >
     <h1 className="text-center" >Message</h1>
     </div>
     <div>
     {messageList}
     </div>
     <WindowReduxForm onSubmit={onSubmit}/>
      </div>
  );
};
export default Window;