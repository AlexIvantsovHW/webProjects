import React from "react";
import Window from "./Window";
import axios from "axios";
import { connect } from "react-redux";
import { messageAC } from './../../redux/MessageReducer';



class WindowContainer extends React.Component{
    componentDidMount(){
        const url="http://localhost/webProjects/t6/chat/src/Component/Window/data.php";
        axios
            .get(url).then(response=>response.data)
            .then((data)=>{this.props.messageAC({data})});
          }
    render(){
        return(
            <Window message={this.props.Message}/>
        )
    }
}
const mapStateToProps=(state)=>{return{Message:state.message,}}

export default connect(mapStateToProps,{messageAC})(WindowContainer);