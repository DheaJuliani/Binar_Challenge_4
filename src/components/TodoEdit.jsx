import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import Data from '../db.json'
import '../App.css'

export default function Edit({ setData, }) {
  // console.log(data)
  const navigate = useNavigate();
  const { id } = useParams();
  const item = Data.find((item) => 
    item.id === Number(id)
  );

  const [task, setTask] = useState(item.task);
    const newTask = { 
      id,
      task: task, 
      complete: false
    };

   
  const onChange = (e) => {
    setTask(e.target.value);
  }

  const onClick = () => {
    setTask(newTask);
    navigate("/");
  }
  


  return (
    <div>
        <h1>TodoEdit</h1>
        <div className="container add__container">
          <div className="input-container">
            <i className="icon"><FaBook /></i>
            <input type="text" value={task} onChange={onChange} placeholder="Edit Todo" />
          </div>
          <div>
            <button onClick={onClick} className="btn adds">Submit</button>
            <Link to="/" className='btn adds cancel'>Cancel</Link>
          </div>
        </div>
    </div>
  );
}