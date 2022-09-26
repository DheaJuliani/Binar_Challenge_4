import React, { useEffect, useState } from "react";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";

export default function Home({ data, setData }) {
  const [filteredTodos, setFilteredTodos] = useState(data);
  const [search, setSearch] = useState("");

  const filter = (status) => {
    if (status === "all") {
      setFilteredTodos(data);
    }
    if (status === "done") {
      const filtered = data.filter((item) => item.complete);
      setFilteredTodos(filtered);
    }
    if (status === "todo") {
      const filtered = data.filter((item) => !item.complete);
      setFilteredTodos(filtered);
    }
    if (status === "search") {
      const filtered = data.filter((item) =>
        item.task.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }

  useEffect(() => {
    setFilteredTodos(data);
  }, [data]);

  return (
    <div>
      <header>
        <h1>TodoSearch</h1>
      </header>
      <div>
      <div>
      <TodoSearch
          search={search}
          setSearch={setSearch}
          filter={filter}
      />
      </div>
      
      </div>
      
          <h1>TodoList</h1>
          <TodoList
            Data={filteredTodos}
            setData={setData}
            filter={filter}
            setFilteredTodos={setFilteredTodos}
          />
          </div>

  );
}