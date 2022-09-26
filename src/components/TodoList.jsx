import Todo from "./Todo";
import React from "react";

export default function todoList({ Data, setData, filter, setFilteredTodos }) {
  const removeHandler = (id) => {
    setData(Data.filter((el) => el.id !== id));
  };

  const removeGroupHandler = (status) => {
    if (status === "all") {
      setData([]);
      setFilteredTodos([]);
    }
    if (status === "done") {
      const filtered = Data.filter((el) => !el.complete);
      setData(filtered);
      setFilteredTodos(filtered);
    }
  }
  function UpdateComplete(checked, index) {
    let newData = Data;
    newData[index].complete = checked;
    setData([...newData]);
  }

  const handleChekboxChange=(id)=>{
    const newTodoList = Data.map(item =>{
      if(item.id=== Number(id))
      if(item.complete === false){
        return{...item, complete:! item.complete}
      }
      return item; 
    })
    console.log(newTodoList)
    setData(newTodoList)
  }

  return (
    <div className="container bottom__container">
      <div>
        <button className="btn" onClick={() => filter("all")}>All</button>
        <button className="btn" onClick={() => filter("done")}>Done</button>
        <button className="btn" onClick={() => filter("todo")}>Todo</button>
      </div>
      <div>
        {Data.map((item, index) => (
          <Todo
            item={item}
            removeHandler={removeHandler}
            UpdateComplete={(checked) => UpdateComplete(checked, index)}
            handleChange={handleChekboxChange}
          />
        ))}
      </div>
      <div className="">
        <button className="btn-delete md" onClick={() => removeGroupHandler("done")}>Delete done tasks</button>
        <button className="btn-delete md" onClick={() => removeGroupHandler("all")}> Delete all tasks</button>
      </div>
    </div>
  );
}