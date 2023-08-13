import React from "react";
import Window from "./Window";
import { connect } from "react-redux";
import { messageAC } from './../../redux/MessageReducer';
import API from "../API/API";



class WindowContainer extends React.Component{
    componentDidMount(){API.getMessage(this.props.messageAC)}
    render(){return(<Window message={this.props.Message} messageAC={this.props.messageAC}/>)}
}
const mapStateToProps=(state)=>{return{Message:state.message,}}

export default connect(mapStateToProps,{messageAC})(WindowContainer);