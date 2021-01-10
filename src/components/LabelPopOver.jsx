import React, { useState, useContext } from "react";
import { Popover, Button, Form } from "react-bootstrap";
import { ListsContext } from "../context/listContext";

function LabelPopOver({listId, cardId, name}) {
  const { changeValue } = useContext(ListsContext);
  const [text, setText] = useState("");

  const popover = (
    <>
      <Popover.Title as="h5">{name}</Popover.Title>
      <Popover.Content>
        <h6>Label</h6>
        <Form.Control
          autoFocus
          as="input"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <Button
          variant="success"
          onClick={() => {
            changeValue({
              type: "new",
              payload: {
                listId,
                cardId,
                property: "label",
                value: text,
              },
            });
            //hide the popover after clicking Add
            document.body.click();
          }}
        >
          Add
        </Button>
      </Popover.Content>
    </>
  );

  return popover;
}

export default LabelPopOver;
