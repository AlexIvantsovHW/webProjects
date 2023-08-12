import React from "react";
import Table from "./Table.js";
import { connect } from "react-redux";
import axios from "axios";
import { tableAC } from "../../redux/TableReducer";


class TableContainer extends React.Component {
  componentDidMount() {
    const url="http://localhost/t4/src/Component/Table/data.php";
    axios
        .get(url).then(response=>response.data)
        .then((data)=>{this.props.tableAC({data})});

      }

  componentDidUpdate(prevProps,prevState){if(prevProps.table!==this.props.table){this.setState(this.props.table)}}
    render() {return(<><Table tableAC={this.props.tableAC}{...this.props}/></>)}
}
const mapStateToProps=(state)=>{return{table:state.table}}

export default connect(mapStateToProps,{tableAC})(TableContainer) ;

