import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/actions";
import { v1 as uuid } from "uuid";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function RichEdit(props) {
  const [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              Using CKEditor 5 Framework in React
            </h1>
          </div>
        </header>
        <CKEditor
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          editor={ClassicEditor}
          data={name}
          onChange={(event, editor) => {
            const data = editor.getData();
            setName(data);
          }}
        />
        <div>
          <h2>Content</h2>
          <h4>{name}</h4>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
            console.log("pops", name);
            props.history.push("/like");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default RichEdit;
