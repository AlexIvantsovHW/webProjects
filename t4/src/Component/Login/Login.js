import { React } from "react";
import { Button } from "react-bootstrap";
import moment from"moment";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { userAC,clearAC } from "../../redux/TableReducer";
import { Field, reduxForm } from "redux-form";
import { targetUser } from "../CommonFunc";
import API from "../../API/API";


const date = moment().format('YYYY-MM-DD HH:mm:ss');


const LoginForm = (props) => { 
  return (
    <div className="mb-3 d-flex justify-content-evenly">
      <form onSubmit={props.handleSubmit}>
        <div className="mb-5">
        <label>User name</label>
          <Field className="form-control form-control-lg ml-10" component='input' name={"name"} placeholder="Alexander" /></div>
        <div className="mb-5">
          <label>User password</label>
          <Field className="form-control form-control-lg"component='input' name={"password"} placeholder="qwerty"/>
          </div>
          <div className="d-flex justify-content-evenly">
          <Button  type="submit">Submit</Button>
          </div>
        
        <div className="text-center mb-2">If you don't have an user account, please fill the regestration form</div>
      </form>
  </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const navigate=useNavigate();
  const onSubmit=(formData)=>{
      let db=props.table.table;
      let tName=formData.name;
        let fData = new FormData();
        fData.append("tLog",date);
        fData.append("name",formData.name);
        fData.append("password",formData.password);
        props.clearAC();
        props.userAC(formData);
        debugger;
        API.getLog(fData)
        let auth=props.table.auth;
        let link;
        if (tName != db[targetUser(db,tName)].name) {link='/login'} 
        else {link='/'} 
        navigate({link});
      } 
  return (
    <div className="container my-5">
     <div className="mx-auto mw-100" >
     <h1 className="text-center" >Login</h1>
     </div>
     <LoginReduxForm onSubmit={onSubmit}/>
      
      </div>
  );
};
const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{userAC,clearAC}) (Login);
