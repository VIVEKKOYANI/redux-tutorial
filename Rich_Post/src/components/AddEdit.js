import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../reducers/actions";
import { useState } from "react";
import "../App.css";

function AddEdit(props) {
  let todos = useSelector((state) => state);
  console.log("todos", todos);
  const handelNext = () => {
    props.history.push("/rich_text");
  };
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">
                          {todos.map((todo) => {
                            return (
                              <div>
                                <TodoItem key={todo.id} todo={todo} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <button onClick={handelNext} class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">Next</button>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEdit;

{
  /* Item Edit */
}

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch("");
  return (
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              {editable ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              ) : (
                <div className="row row-cols-6 justify-content-center">
                  <h4>{todo.name}</h4>
                </div>
              )}
              <tbody class="bg-white divide-y divide-gray-200">
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      dispatch(
                        updateTodo({
                          ...todo,
                          name: name,
                        })
                      );
                      if (editable) {
                        setName(todo.name);
                      }
                      setEditable(!editable);
                    }}
                  >
                    {editable ? "Update" : "Edit"}
                  </button>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    Delete
                  </button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
