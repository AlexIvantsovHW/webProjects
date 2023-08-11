import React  from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { tableAC } from "../../redux/TableReducer";

const Header=(props)=>{
  let link;
      if(props.table.table[0].name===props.table.auth.name){link='/'}
      else{link='/login'}
  {
    return (
      <div className="header">
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
        <NavLink to={link}>
          <Button>User manager</Button>
        </NavLink>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { table: state.table };
};
export default connect(mapStateToProps, {tableAC})(Header);
