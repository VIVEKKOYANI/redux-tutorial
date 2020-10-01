import React from "react";
import { useSelector } from "react-redux";

function LinkeComment(props) {
  let todos = useSelector((state) => state);
  console.log("todos", todos);
  const handelNext = () => {
    props.history.push("/");
  };
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">Post</p>
      </div>
      <div>
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">
              {todos.map((todo) => {
                return (
                  <div key={todo.id.length > 1 ? todo.id[2] : todo.id}>
                    <h1>{todo.name}</h1>
                  </div>
                );
              })}
            </dt>
          </div>
        </dl>
      </div>
      <button onClick={handelNext}>Home</button>
    </div>
  );
}

export default LinkeComment;
