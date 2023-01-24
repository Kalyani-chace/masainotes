import React, { useEffect } from "react";
import { useState } from "react";

const Notes = () => {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [todoArray, setTodoArray] = useState(
    JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const handleChange = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };
  let { title, description, date } = todos;

  const handleSubmit = () => {
    setTodoArray([...todoArray, { title, description, date }]);
    window.localStorage.setItem("todos", JSON.stringify(todoArray));
    console.log(JSON.parse(localStorage.getItem("todos")), "check");
    window.location.reload(true);
  };
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoArray));
  }, [todoArray]);
  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className=" flex items-center justify-around">
        <div className="flex  items-center gap-[10px]">
          <label className="text-gray-700 text-sm font-bold">Title: </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            placeholder="Add todo masai notes"
            name="title"
            value={todos.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex  items-center gap-[10px]">
          <label className="text-gray-700 text-sm font-bold">
            Description:{" "}
          </label>
          <input
            type="text"
            placeholder="Add description masai notes"
            value={todos.description}
            name="description"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex  items-center gap-[10px]">
          <label className="text-gray-700 text-sm font-bold">Date: </label>
          <input
            type="date"
            placeholder="Enter a date"
            value={todos.date}
            onChange={handleChange}
            name="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          // type="submit"
          onClick={handleSubmit}
          className="bg-[#facc15] px-[20px] py-[10px] rounded-[10px] border border-[1px]-[#fef9c3] hover:opacity-[70%] transition duration-[300ms]"
        >
          Add Todo
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Notes;
