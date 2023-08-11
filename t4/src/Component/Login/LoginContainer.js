import React from "react";
import Login from './Login';
import { userAC } from './../../redux/TableReducer';
import { connect } from 'react-redux';

class LoginContainer extends React.Component{
    
    render(){
        debugger;
        return(
            <>
            <Login userAC={this.props.userAC} {...this.props} />
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        table:state.table, 
    }
}
export default connect(mapStateToProps,{userAC}) (LoginContainer);