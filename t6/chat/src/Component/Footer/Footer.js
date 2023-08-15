
import { React } from 'react';
import { Field,reduxForm } from "redux-form";

const   WindowForm= (props) => { 
    return (
      <div id="footer" className="footer fixed-bottom ml-4 bg-dark text-white-50">
        <form onSubmit={props.handleSubmit}>
          <div className="user">
          <label>Name</label>
            <Field className="inp-user" component='input' name={"name"} placeholder="User name" /></div>
          <div  className="text">
            <label>Text</label>
            <Field className="inp-text"component='input' name={"text"} placeholder="text"/>
            </div>
            <div className="sticky-bottom">
            <button  type="submit">Submit</button>
            </div>
        </form>
    </div>
    );
  };
  export default WindowForm;
  export const WindowReduxForm = reduxForm({ form: "message" })(WindowForm);