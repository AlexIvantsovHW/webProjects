import { React } from "react";
import { messageForm, tagWord } from "./Message";
import API from "../API/API";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import "../style.css";
import { getTags, sendSVG } from "../ComonFunc";

const date = moment().format("YY-MM-DD");
function getTd(item, w, position) {return <td className={`w-${w} text-${position} text-nowrap `}>{item}</td>;}
function  getField(name,w){return(<Field component="input" name={`${name}`} placeholder={`Type your ${name}`} className={`w-${w} h-2 mx-3`}/>)}

const WindowForm = (props) => {
  return (  
      <div>
      <form onSubmit={props.handleSubmit}>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
          {getField('name','25')}
          {getField('text','75')}
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success mt-2" type="submit">{sendSVG} Send message</button>
          </div>
        </div>
        </form>  
      </div>
  );
};
const WindowReduxForm = reduxForm({ form: "message" })(WindowForm);

const Window = (props) => {
  const messageData = props.message.Message;
  const tagArr=getTags(props.message.Filter);
  const tagFilter =getTags(props.message.Filter);
  debugger;
  let filterMessages = messageData.filter((o) => tagFilter.includes(o.tag));
  debugger;
  const messageList =filterMessages.length > 0? filterMessages: messageData;
  function onSubmit(formData) {
    const tag = tagWord(formData.text);
    let fData = new FormData();
    fData.append("name", formData.name);
    fData.append("text", formData.text);
    fData.append("tag", tag);
    fData.append("time", date);
    API.getForm(fData);
    API.getMessage(props.messageAC);
  }
  debugger;
  return (
    <div className="col row-md-4 bg-secondary text-white w-25">
      <div>
        <div><h1 className="text-center text-light">ITRANSITION LIVE CHAT</h1></div>
        <div className="bg-light text-dark">
          <div
            className="table-wrapper-scroll-y my-custom-scrollbar"
            style={{
              display: "block",
              position: "relative",
              height: 500,
              overflow: "auto",
            }}
          >
            <table className="table table-bordered table-striped mb-0">
              <thead>
                <tr>
                  <th className="th-sm text-center" scope="col">Name</th>
                  <th className="th-sm text-center" scope="col">Message</th>
                  <th className="th-sm text-center" scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {messageList.map((el) => (
                  <tr className="">
                    {getTd(el.name, "25", "center", "font-weight-bold")}
                    {getTd(el.text, "50", "left", "font-weight-normal")}
                    {getTd(el.time, "25", "center", "font-italic")}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <WindowReduxForm onSubmit={onSubmit}/>                  
    </div>
  );
};
export default Window;
