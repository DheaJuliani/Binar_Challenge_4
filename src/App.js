import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./db.json";
import Home from "./components/Home";
import TodoAdd from "./components/TodoAdd";
import TodoEdit from "./components/TodoEdit";

export default function App() {
  const [data, setData] = useState(Data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/TodoAdd" element={<TodoAdd setData={setData} />} />
        <Route path="/edit/:id" element={<TodoEdit />} />
      </Routes>
    </BrowserRouter>
  );
}