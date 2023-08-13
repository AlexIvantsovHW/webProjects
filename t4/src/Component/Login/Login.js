import { React } from "react";
import { Button } from "react-bootstrap";
import moment from"moment";
import { connect } from "react-redux";
import { userAC,clearAC,tableAC } from "../../redux/TableReducer";
import { Field, reduxForm } from "redux-form";
import {dbName, dbPassword } from "../CommonFunc";
import API from "../../API/API";
import axios from "axios";

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
  async function req(){
    const url="http://localhost/t4/src/Component/Table/data.php";
    const res=await axios.get(url);
    return res.data;
  }
  async function onSubmit(formData){
    let fData = new FormData();  
        fData.append("tLog",date);
        fData.append("name",formData.name);
        fData.append("password",formData.password);
        await API.getLog(fData,tableAC)
        async function tesT(){
          const data= await req();
          const arrName=await dbName(data);
          const arrPassword=await dbPassword(data);
          const tId= arrName.indexOf(formData.name);
          const targetPassword= await arrPassword[tId];
          let name;
          if(tId===(-1)){name='NoName'}else{name=data[tId].name}
          return ((name===formData.name)&&(targetPassword===formData.password));
          }
         if(await tesT()===true){formData['status']='Active'}else{formData['status']='Blocked';}
        props.userAC(formData)
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
export default connect(mapStateToProps,{userAC,clearAC,tableAC}) (Login);
