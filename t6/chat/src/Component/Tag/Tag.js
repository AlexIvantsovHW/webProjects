import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Filter, deleteItem, getTags, getForm } from "./TagFunc";

const Tag = (props) => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const message = props.message.Message;
  
  const tags = getTags(message);

  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      debugger;
      setChecked([...isChecked, value]);
    } else {
      debugger;
      setChecked(isChecked.filter((e) => e !== value));
      
    }/* 
    debugger;
    Filter(isChecked, props.filterAC); */
  };
  function approve(){
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
    <div className="col">
      <h1>#Tag list</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
  debugger;
  return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                <input
                  type="checkbox"
                  value={item.value}
                  checked={item.isChecked}
                  onChange={(e) => handlecheckbox(e)}
                />
                {item.value}
                <button
                  className="delete-button bg-light"
                  onClick={() => deleteItem(items, item.id, setItems)}
                >❌</button>
              </li>
            </div>
          );
        })}

        {tags.map((item) => {
          return (
            <div>
              <li>
                <input
                  type="checkbox"
                  value={item}
                  checked={item.isChecked}
                  onChange={(e) => handlecheckbox(e)}
                />
                {item}
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={approve}>Dispay</button>
    </div>
    
  );
};
export default Tag;
