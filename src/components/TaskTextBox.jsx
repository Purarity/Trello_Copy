import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { ListsContext } from "../context/listContext";

function TaskTextBox({ setText, text, setShowEditBox, type, payload }) {
  const { changeValue } = useContext(ListsContext);
  return (
    <span>
      <Form.Control
        autoFocus
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
        onBlur={() => {
          setShowEditBox(false);
          changeValue({
            type,
            payload,
          });
        }}
        as="textarea"
      />
    </span>
  );
}

export default TaskTextBox;
