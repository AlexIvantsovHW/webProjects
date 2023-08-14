import React from "react";
import Window from "./Window";
import { connect } from "react-redux";
import { filterAC, messageAC } from './../../redux/MessageReducer';
import API from "../API/API";



class WindowContainer extends React.Component{
    componentDidMount(){API.getMessage(this.props.messageAC); }

     componentDidUpdate(prevProps,prevState){if(prevProps.Message!==this.props.Message){this.setState(this.props.Message)}} 
    render(){return(<Window message={this.props.Message} messageAC={this.props.messageAC} filterAC={this.props.filterAC}/>)}
}
const mapStateToProps=(state)=>{return{Message:state.message,}}

export default connect(mapStateToProps,{messageAC,filterAC})(WindowContainer);