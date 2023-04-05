import React, { useState } from "react";

function StateFullComponent() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  function handelComments(e) {
    setComments([...comments, text]);
    setText("");
  }

  function handelTextChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <title>Function example</title>
      <ul>
        {comments.map((c, key) => (
          <li key={key}>{c}</li>
        ))}
      </ul>
      <label>leave your comments bellow 👇</label>
      <div>
        <textarea value={text} onChange={(e) => handelTextChange(e)}></textarea>
      </div>
      <button type="button" onClick={(e) => handelComments(e)}>
        Submit
      </button>
    </div>
  );
}

export default StateFullComponent;
