import React from "react"
import { Navigate } from "react-router-dom"

export const withAuthNavigate =(Component)=>{

 
    class NavigateComponent extends React.Component{       

        render(){
            debugger;
            if(!this.props.table.table) return <Navigate to='/login'/>;
            return <Component {...this.props}/>
        }
    }
    return NavigateComponent;
}