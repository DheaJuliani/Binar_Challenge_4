import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import '../App.css'

export default function Add({ setData }) {
  const navigate = useNavigate();
  const [task, setTask] = useState("");

  const inputTaskHandler = () => {
    const newData = { 
      id: Math.random() * 100, 
      task, 
      complete: false };
    setData((data) => [...data, newData]);
    navigate("/");
  }

  const onChange = (e) => {
    setTask(e.target.value);
  }

  return (
    <div>
      <h1>TodoInput</h1>
      <div className="container add__container">
      <div className="input-container">
        <i className="icon"><FaBook /></i>
        <input type="text" value={task} onChange={onChange} placeholder="Input Todo"  />
      </div>
      <div>
        <button onClick={inputTaskHandler} className="btn adds">Submit</button>
        <Link to="/" className='btn adds cancel'>Cancel</Link>
      </div>
      </div>
    </div>
  );
}