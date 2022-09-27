import React, { useState } from "react";
import "./App.css";

function Todo() {
    

const [data, setData] = useState("");

const [items, setItems] = useState([]);


  const addItem = () => {
    if (!data) {
    } else {
      setItems([...items, data]);
      setData("");
    }
  };

  //delete the items

  const deleteitem = (id) => {
    const updateditems = items.filter((e, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };

  //remove all items

  const removeItems = ()=>{
    setItems([]);
  }

  // edit items

  const edititems = (id)=>{
  let newEdits = items.find((elem)=>{
    return elem.id === id;
  });
  setData(newEdits)
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="additems">
            <input
              type="text"
              placeholder="Add items"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button onClick={addItem}> + </button>
          </div>
          <div className="showitems">
            {items.map((elem, ind) => {
              return (
                <div className="eachitem" key={ind}>
                  <h3>{elem}</h3>
                  <button onClick={() => deleteitem(ind)}> - </button>
                  <button onClick={edititems}>EDIT</button>
                </div>
              );
            })}
          </div>

          <div className="removeall">
            <button onClick={removeItems}> REMOVE ALL </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;