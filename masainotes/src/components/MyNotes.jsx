import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const MyNotes = () => {
  const [myTodos, setMyTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos"))
  );
  //   window.location.reload(true);

  useEffect(() => {
    setMyTodos(JSON.parse(window.localStorage.getItem("todos")));
  }, []);
  useEffect(() => {
    const fetchTodos = () => {
      //   const data = JSON.parse(window.localStorage.getItem("todos"));
      //   console.log(data);
      //   setMyTodos([...myTodos, data]);
      //   console.log("myTodos", window.localStorage.getItem("todos"));
    };
    fetchTodos();
  }, [myTodos]);
  //   console.log(myTodos.isArray);
  return (
    <div className="grid grid-cols-4 gap-[30px]">
      {JSON.parse(window.localStorage.getItem("todos"))?.map((elem, ind) => {
        return (
          <Card
            key={ind}
            title={elem.title}
            desc={elem.description}
            date={elem.date}
            id={ind}
          />
        );
      })}
    </div>
  );
};

export default MyNotes;
