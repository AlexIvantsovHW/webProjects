export const Filter=(isChecked,AC)=>{debugger;AC([null].concat(isChecked))}
export function deleteItem(items,id,setItems) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);}

export function getTags(data){
    let x=[];
    for (let i=0;i<data.length;i++){x.push(data[i].tag)}
    return Array.from(new Set(x)).filter(Boolean);
    
}
export function getForm(id,value,chd,arr,func,handlecheckbox,deleteItem,setShowEdit){
    debugger;
 (
        <div>
                
        <li key={id} onClick={() => setShowEdit(id)}>
        <input type='checkbox'                   
            value={value}
          checked={chd}
          onChange={(e) => handlecheckbox(e)}/>{value}
          <button
            className="delete-button bg-light"
            onClick={() => deleteItem(arr,id,func)}
          >
            ❌
          </button>
        </li>

      </div>
    )
}
  