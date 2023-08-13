import { NavLink } from "react-router-dom";


export function dbName(arr){
  let arrName=[];
  for (let i=0;i<arr.length;i++){
    arrName.push(arr[i].name)
  }
  return arrName;
}
export function dbPassword(arr){
  let arrPassword=[];
  for (let i=0;i<arr.length;i++){
    arrPassword.push(arr[i].password)
  }
  return arrPassword;
}

export function targetUser(data, el) {
  let target;
  for(let i=0;i<data.length;i++){
    console.log(`data i:${data[i]}`, `data type :${typeof(data[i])}`)
    console.log(`el :${el}`, `el type :${typeof(el)}`)
    console.log(`Result :${el===data[i]}`)
      if(([data[i]]===el)===true){return target=i}else{return target=-1}
    }
  }
    
export function Btn(Link, name) {
  return (
    <NavLink to={Link}>
      <button type="button" className="btn btn-secondary">
        {name}
      </button>
    </NavLink>
  );
}

export function navLink(link, Name) {
    return (
      <li class="nav-item">
        <NavLink className="nav-link active" to={link}>
          {Name}
        </NavLink>
      </li>
    );
  }
  export function Logout(link, Name,AC) {
    return (
      <li class="nav-item">
      <NavLink className="nav-link active" to={link}onClick={()=>{AC({name:null,password:null,status:'Blocked'})}}>
        {Name}
      </NavLink>
    </li>);
  }
