import React from "react";
import { button } from "react-bootstrap";
import { connect } from "react-redux";

import { tableAC } from "../../redux/TableReducer";
import { navLink, targetUser } from "../CommonFunc";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let link;
  /* let db=props.table.table;
  let tName=props.table.auth.name;
      let auth=props.table.auth;
      debugger;
      if (tName != db[targetUser(db,tName)].name) {link='/login'} 
      else {link='/'}  */
  link = "/";
  
  return (
    <div className="bg-primary.bg-gradient">
      <ul class="nav justify-content-center">
        {navLink("/login", "Login")}
        {navLink("/", "User management")}
        {navLink("/registration", "Registration")}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { table: state.table };
};
export default connect(mapStateToProps, { tableAC })(Header);
