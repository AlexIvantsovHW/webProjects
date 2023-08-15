import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Filter, deleteItem, getButton, getLi, getTags } from "./TagFunc";
import { trash } from "./utilit";
import  '../style.css'

const Tag = (props) => {
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
    const newItem = {
      id: currentItem.id,
      value: newText,
    };
    deleteItem(items, id, setItems);
    setItems((oldList) => [...oldList, newItem]);
    setShowEdit(-1);
  }
  return (
    <div className="col-10 row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <h1>#Tag list</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        onClick={() => addItem()}
        className="btn btn-outline-success"
      >Add tag</button>
      <ul className="list-group">
        {items.map((el) => {
          return (
            <div className="container">
              <div className="row ">
                {getLi(el.id, el.value, el.isChecked, handle, setShowEdit)}
               {/*  {getButton(deleteItem, items, el.id, setItems, trash)} */}
              </div>
            </div>
          );
        })}
        {tags.map((el) => {return (<div className="row">{getLi(null, el, el.isChecked, handle, setShowEdit)}</div>);})}
      </ul>
      <button className="btn btn-outline-success" onClick={approve}>Dispay</button>
      </div>
      </div>
    </div>
  );
};
export default Tag;
