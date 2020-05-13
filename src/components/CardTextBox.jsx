import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { ListsContext } from "../context/listContext";

function CardTextBox({
  setText,
  text,
  setShowEditBox,
  type,
  payload,
  noEmptyText,
}) {
  const { changeValue } = useContext(ListsContext);
  return (
    <Form.Control
      autoFocus
      value={text}
      onChange={(event) =>
        setText(event.currentTarget.value)
      }
      onBlur={() => {
        setShowEditBox(false);
        setText("");
        if (noEmptyText && text === "") {
          return;
        }
        changeValue({
          type,
          payload,
        });
      }}
      as="input"
    />
  );
}

export default CardTextBox;
