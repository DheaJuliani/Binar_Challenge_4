import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { BsFillPencilFill } from 'react-icons/bs';
import '../App.css'

export default function TodoItem({ item, complete, removeHandler, UpdateComplete, handleChange}) {

  const hanldeCheckboxChange=()=>{
    if(item.complete)
        return null;
    handleChange(item.id)
}

  return (
    <div >
      <div className="todo">
        <div className="todo todo-list">
          <li style={item.complete ? {textDecoration:"line-through 2px red"}:null}> {item.task}</li>
          <input type="checkbox" checked={item.complete} onChange={hanldeCheckboxChange} />
          <Link to ={`/edit/${item.id}`} className="btn-icon pncl"><BsFillPencilFill /></Link>
          <button onClick={() => removeHandler(item.id)} className="btn-icon trsh"><FaTrash /></button>
        </div>
      </div>
    </div>
  );
}