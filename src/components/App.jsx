import React, {useState} from "react";
import ToDoItem from "./ToDoItem"
import InputArea from "./InputArea";

function App() {

  const [list, setList] = useState([]);

  function onButtonClick(item){
    setList((prevValue) => {
      return [...prevValue, item];
    })
  }

  function deleteItem(id){
    setList((prevValue) => {
      return prevValue.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        buttonAction = {onButtonClick}
      />
      <div>
        <ul>
          {list.map((listitem, index) =>
            <ToDoItem
              item = {listitem}
              onSelectItem = {deleteItem}
              key = {index}
              id = {index}
            />)}

        </ul>
      </div>
    </div>
  );
}

export default App;
