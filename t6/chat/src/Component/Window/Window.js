import { React } from "react";
import {messageForm, tagWord} from "./Message";
import API from "../API/API";
import { Field,reduxForm } from "redux-form";
import moment from"moment";
import { WindowReduxForm } from "../Footer/Footer";
import '../style.css'

const date = moment().format("YY-MM-DD HH:mm:ss");


const Window= (props) => {

  const messageData = props.message.Message;
  const tagFilter=props.message.Filter;
  let filterMessages = messageData.filter((o) => tagFilter.includes(o.tag));
  debugger;
  const messageList =(filterMessages.length>0?filterMessages.map((el)=>messageForm(el.name, el.text,el.time)):messageData.map((el)=>messageForm(el.name, el.text,el.time))) ;
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
    <div className="container col-8 overflow-scroll">
     <div className="d-flex flex-column pl-5 mh-100%">
      <div><h1 className="text-center" >Message</h1></div>
     <div className="message-window">{messageList}</div>
     <WindowReduxForm onSubmit={onSubmit}/>
     </div>
      </div>
  );
};
export default Window;
