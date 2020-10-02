import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_LIKE } from "../reducers/actions";
import ReactHtmlParser from 'react-html-parser';

function Create(props) {
  const handelPost = () => {
    console.log(props);
    props.history.push("/add");
  };
  let todos = useSelector((state) => state);
  console.log("todos", todos);
  const handelNext = () => {
    props.history.push("/edit");
  };
  let dispatch = useDispatch("");
  const [like, setLike] = useState(false);
  const handelLike = () => {
    setLike(!like);
  };
  const handelComment = () => {
    return <input type="text" />;
  };
  const label = like ? "Unlike" : "Like";
  return (
    <div>
      <button
        onClick={handelPost}
        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        CREATE
      </button>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h1 class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">Post</h1>
        </div>
        <div>
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm leading-5 font-medium text-gray-500">
                {todos.map((todo) => {
                  return (
                    <div >
                      <p></p>
                      <h1>{ReactHtmlParser(todo.name)}</h1>
                      <button onClick={handelLike}>{label}</button>
                      {"  "}
                      <button onClick={handelComment}>comment</button>
                    </div>
                  );
                })}
              </dt>
            </div>
          </dl>
        </div>
        <button onClick={handelNext}>EDIT</button>
      </div>
    </div>
  );
}

export default Create;
