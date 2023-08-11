import { React } from "react";
import { Button } from "react-bootstrap";
import moment from"moment";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { userAC,clearAC } from "../../redux/TableReducer";
import { Field, reduxForm } from "redux-form";

const date = moment().format('YYYY-MM-DD HH:mm:ss');
const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div><Field component='input' name={"name"} placeholder="Type user name" /></div>
        <div><Field component='input' name={"password"} placeholder="Type user password"/></div>
        <Button type="submit">Submit</Button>
      </form>
  </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const navigate=useNavigate();
  const onSubmit=(formData)=>{let fData = new FormData();
        fData.append("tLog",date);
        fData.append("name",formData.name);
        fData.append("password",formData.password);
        props.clearAC();
        props.userAC(formData);
        debugger;
   let db=props.table.table;
        let auth=props.table.auth;
        let link;
        if (auth.name != db[0].name &&auth.password != db[0].password) {link='/login'} 
        else {link='/'} 
        debugger;
        navigate({link});
      } 
  return (
    <div>
      <h1>Login</h1><LoginReduxForm onSubmit={onSubmit}/>
      <div>If you don't have an user account, please fill the regestration form</div>
      </div>
  );
};
const mapStateToProps=(state)=>{return{table:state.table}}
export default connect(mapStateToProps,{userAC,clearAC}) (Login);
