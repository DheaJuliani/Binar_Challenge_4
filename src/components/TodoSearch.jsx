import React from "react";
import {Link} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';


export default function TodoSearch({ search, setSearch, filter }) {
  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className='container top__container'>
        <div className="top__left">
            <div className="input-container">
                <i className="icon"><BsSearch /></i>
                <input 
                type="text"
                placeholder="Search Todo ...."
                value={search}
                onChange={onChange}
                />
            </div>
            <button className="btn lg" onClick={() => filter("search")}>Search</button>
        </div>
        <div className="top__right">
            <Link to="/TodoAdd" className="btn md">Add new Task</Link>
        </div>
    </div>



  );
}