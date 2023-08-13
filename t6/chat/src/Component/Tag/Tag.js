import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
/* https://qna.habr.com/q/509578 */
const Tag=()=>{  
    let x;
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [isChecked, setChecked] = useState([]);
    const handlecheckbox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setChecked([...isChecked, value]);
        } else {
          setChecked(isChecked.filter((e) => e !== value));
         }
        
      };
      console.log(isChecked)
  
    const [showEdit, setShowEdit] = useState(-1);
    function addItem() {
      if (!newItem) {
        alert("Press enter a tag.");
        return;
      }
  
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: '#'+newItem,
      };
  
      setItems((oldList) => [...oldList, item]);
  
      setNewItem("");
    }
    function deleteItem(id) {
      const newArray = items.filter((item) => item.id !== id);
      setItems(newArray);
    }
  
    function editItem(id, newText) {
      const currentItem = items.filter((item) => item.id === id);
  
      const newItem = {
        id: currentItem.id,
        value: newText,
      };
  
      deleteItem(id);

      setItems((oldList) => [...oldList, newItem]);
      setShowEdit(-1);
    }
    return (
      <div className="col">
        <h1>My tag list</h1>
          <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => (setNewItem(e.target.value))}
        />
        <button onClick={() => addItem()}>Add</button>
        <ul>
          {items.map((item) => {
            return (
              <div>
                
                <li key={item.id} onClick={() => setShowEdit(item.id)}>
                <input type='checkbox'                   
                    value={item.value}
                  checked={item.isChecked}
                  onChange={(e) => handlecheckbox(e)}/>{item.value}
                  <button
                    className="delete-button bg-light"
                    onClick={() => deleteItem(item.id)}
                  >
                    ❌
                  </button>
                </li>
  
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
export default Tag;