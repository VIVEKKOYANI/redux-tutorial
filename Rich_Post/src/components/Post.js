import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/actions";
import { v1 as uuid } from "uuid";

function Post(props) {
  const [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Workflow"
          />
        </div>{" "}
        <input
          type="text"
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="Post"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div class="mt-6">
          <button
            type="submit"
            onClick={() => {
              dispatch(
                addTodo({
                  id: uuid(),
                  name: name,
                })
              );
              setName("");
              console.log("pops", name);
              props.history.push("/add-edit");
            }}
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
