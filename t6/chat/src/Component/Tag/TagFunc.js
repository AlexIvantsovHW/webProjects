export const Filter=(isChecked,AC)=>{debugger;AC([null].concat(isChecked))}
export function deleteItem(items,id,setItems) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);}

export function getTags(data){
  debugger;
    let x=[];
    for (let i=0;i<data.length;i++){x.push(data[i].tag)}
    return Array.from(new Set(x)).filter(Boolean);
}
export function getLi(id,value,isChecked,handle,setShowEdit){
  return(
    <li
    key={id}
    onClick={() => setShowEdit(id)}
    className="nav-item" 
  >
    <input
      type="checkbox"
      value={value}
      checked={isChecked}
      onChange={handle}
      className="form-check-input me-1"
    />
    <i class="fs-4 bi-table"></i>
    <span className="ms-1 d-none d-sm-inline">{value}</span>
  </li>
  )
}
export function getButton(deleteItem,items,id,setItems,name){
  return(
    <button className="bg-white border-white col-1 " onClick={() => deleteItem(items, id, setItems)}>{name}</button>
  )
}