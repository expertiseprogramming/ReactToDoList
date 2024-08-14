import React, {useState} from "react";

function InputArea(props) {
  const [item, onAddItem] = useState("");

  function onInputChange(event){

    const value  = event.target.value;
    console.log(value)
    onAddItem(value);
  }

  return (
    <div className="form">
      <input onChange = {onInputChange} type="text" name = "list" value={item}/>
      <button onClick = {() => {
        props.buttonAction(item)
        onAddItem("")
      }
    }>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
