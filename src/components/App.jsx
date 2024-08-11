import React, {useState} from "react";

function App() {
  const [item, onAddItem] = useState("");

  const [list, setList] = useState([]);

  function onInputChange(event){

    const value  = event.target.value;
    console.log(value)
    onAddItem(value);
  }

  function onButtonClick(){
    setList((prevValue) => {
      return [...prevValue, item];
    })
    onAddItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {onInputChange} type="text" name = "list" value={item}/>
        <button onClick = {onButtonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listitem) => <li>{listitem}</li>)}

        </ul>
      </div>
    </div>
  );
}

export default App;
