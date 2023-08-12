
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
const block=()=>{
  API.getBlock(isChecked,props.tableAC)
}
  function tD (el,status){let x;(status!='Active'?x='bg-warning':x='bg-success');return (<td className={x}>{el}</td>)};
  return (
    <div className="table-responsive mt-5">
      <div className="d-flex justify-content-evenly ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
      <button className="mt-10 btn btn-danger mx-auto " onClick={()=>{API.getDelete(isChecked,props.tableAC)}}>Delete</button>
      <button className="mt-10 btn btn-success mx-auto" onClick={()=>{API.getUnBlock(isChecked,props.tableAC)}}>Unblock</button>
      <button className="mt-10 btn btn-warning mx-auto" onClick={block}>Block</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> 
            <button className='mt-10 btn btn-danger mx-auto' onClick={()=>{API.getDelAll(props.tableAC)}}>All</button></th>
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
