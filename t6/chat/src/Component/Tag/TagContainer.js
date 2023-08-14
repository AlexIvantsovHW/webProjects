import React from "react";
import Tag from "./Tag";
import { connect } from "react-redux";
import { filterAC,tagsAC } from "../../redux/MessageReducer";



class TagContainer extends React.Component{
    render(){
        return(
            <Tag message={this.props.message} filterAC={this.props.filterAC} tagsAC={this.props.tagsAC}/>
        )
    }
}

const mapStateToProps=(state)=>{return{message:state.message,}}

export default connect(mapStateToProps,{filterAC,tagsAC})(TagContainer);