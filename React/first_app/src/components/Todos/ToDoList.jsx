import React from 'react'

const ToDoList = ({
  title,status,id,handleToggle,handleDelete
}) => {
  
  return (
    <div style={{
      display:"flex",
      gap: "1rem",
      justifyContent: "space-between",
      marginTop: "1rem"

    }}>
      <b key={id}>{title}  </b>{status?"done":"not done"}
      <button onClick={()=>{handleToggle(id,!status)}} style={!status? {background:"red"}:{
        background:"green"
      }}>{status?"Not Done":"Done"}</button>
      <button onClick={()=>{handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default ToDoList