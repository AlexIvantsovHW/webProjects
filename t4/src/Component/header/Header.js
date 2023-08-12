import React from "react";
import { button } from "react-bootstrap";
import { connect } from "react-redux";

import { tableAC,userAC } from "../../redux/TableReducer";
import { Logout, navLink, targetUser } from "../CommonFunc";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let link = "/";
  return (
    <div className="bg-primary.bg-gradient">
      <ul class="nav justify-content-center">
      {props.table.auth.status==='Active'?Logout('/login','Logout',props.userAC):navLink("/login", "Login")}
        {navLink("/", "User management")}
        {navLink("/registration", "Registration")}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { table: state.table };
};
export default connect(mapStateToProps, { tableAC,userAC })(Header);
