import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Filter, deleteItem, getButton, getLi, getTags } from "./TagFunc";
import { trash } from "./utilit";
import  '../style.css'

import { addSVG, liGenerator } from "../ComonFunc";

const arr = ["Text-1", "Texsdsdt-1", "Text-1", "Text-1", "Text-1"];
const TagList = (props) => {
  debugger;
  let Tags=props.message.initTags; 
  debugger;
  const handle = (e) => handlecheckbox(e);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const message = props.message.Message;
  const tags = getTags(message);
  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChecked([...isChecked, value]);
    } else {
      setChecked(isChecked.filter((e) => e !== value));
    }
  };
  function approve() {
    Filter(isChecked, props.filterAC);
  }
  function addItem() {
    if (!newItem) {
      alert("Press enter a tag.");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: "#" + newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }
  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);
    const newItem = {id: currentItem.id,value: newText,};
    deleteItem(items, id, setItems);
    setItems((oldList) => [...oldList, newItem]);
    setShowEdit(-1);
  }
  debugger;
  return (
    <div className="col-4 bg-dark  border-right border-white ">
          <h1 className="text-white text-center">Tag list</h1>
          <div className="row ">
            <div className="col ">
              <input 
              type="text"
              placeholder="Add an item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              />
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={() => addItem()}>{addSVG}</button>
            </div>
            <ul className="my-3 list-group d-flex align-content-center border-white">
              {items.map((el) => {return liGenerator(el.value,deleteItem);})}
            </ul>
          </div>
          <div>
            <button className="btn btn-success" onClick={()=>(props.filterAC(items))}>Display</button>
          </div>
        </div>
     );
};
export default TagList;