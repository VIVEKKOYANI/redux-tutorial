import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/actions";
import { v1 as uuid } from "uuid";
import ReactHtmlParser from 'react-html-parser';
function RichEdit(props) {
  const [name, setName] = useState();
  let dispatch = useDispatch("");
  return (
    <div class="">
      <CKEditor
        class=""
        editor={ClassicEditor}
        data={name}
        onChange={(event, editor) => {
          const data = editor.getData();
          setName(data);
        }}
      />
      <div>
        <h2>Content</h2>
        <p>{ReactHtmlParser(name)}</p>
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
          props.history.push("/posts");
        }}
      >
        Save
      </button>
    </div>
  );
}

export default RichEdit;
