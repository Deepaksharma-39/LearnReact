import React, { useState } from 'react'

function AddToDo ({handleAdd}){
  const [text,setText]= useState("");
  
  const handleChange=e=>{
    setText(e.target.value);
    
  }

  const handleSubmit=()=>{
    handleAdd(text)
  }
  
  return (
    <div>
      <input onChange={handleChange} placeholder="add Something"/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddToDo