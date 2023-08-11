
import React, { useState } from "react";
import API from "../../API/API";


const Table = (props) => {
  let data = (props===undefined?null:props.table.table);
  const [isChecked, setChecked] = useState([]);
  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChecked([...isChecked, value]);
    } else {
      setChecked(isChecked.filter((e) => e !== value));
     }
  };

  function tD (el,status){let x;(status!='Active'?x='bg-warning':x='bg-success');return (<td className={x}>{el}</td>)};
  return (
    <div className="table-responsive mt-5">
      <div className="d-flex justify-content-evenly ">
      <button className="mt-10 btn btn-danger mx-auto " onClick={()=>{API.getDelete(isChecked)}}>Delete</button>
      <button className="mt-10 btn btn-success mx-auto" onClick={()=>{API.getUnBlock(isChecked)}}>Unblock</button>
      <button className="mt-10 btn btn-warning mx-auto" onClick={()=>{API.getBlock(isChecked)}}>Block</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> <button className='mt-10 btn btn-danger mx-auto' onClick={()=>{API.getDelAll()}}>All</button></th>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Last login time</th>
            <th scope="col">Time of regestration</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody >
          {data.map((el, index) => (
            <tr key={index} >
              <td className={(el.status!='Active'?'bg-warning':'bg-success')}>
                <input
                  type="checkbox"
                  value={el.id}
                  checked={el.isChecked}
                  onChange={(e) => handlecheckbox(e)}
                />
              </td>
              {tD(el.id,el.status)}
              {tD(el.name,el.status)}
              {tD(el.email,el.status)}
              {tD(el.tLog,el.status)}
              {tD(el.tReg,el.status)}
              {tD(el.status,el.status)}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
