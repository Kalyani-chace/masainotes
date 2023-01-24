import React from "react";

const Card = ({ title, desc, date, id }) => {
  const deleteTodo = () => {
    console.log("delete", id);
    const updatedTodos = JSON.parse(
      window.localStorage.getItem("todos")
    ).filter((items, ind) => {
      return ind !== id;
    });
    console.log("updated todos", updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    window.location.reload(true);
  };
  return (
    <div className="border w-[100%] bg-[#facc15] p-[20px] shadow-md rounded-[10px] flex flex-col items-center">
      <div className="font-sans	text-lg	">Title: {title}</div>
      <div className="font-sans	text-lg	my-[20px]">Desc: {desc}</div>
      <div className="font-sans	text-lg	">date: {date}</div>
      <button
        onClick={deleteTodo}
        className="bg-[#fefce8] px-[20px] py-[10px] rounded-[10px] border border-[1px]-[#fef9c3] hover:opacity-[70%] transition duration-[300ms] mt-[20px]"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
