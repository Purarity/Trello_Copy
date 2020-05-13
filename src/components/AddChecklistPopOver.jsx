import React, { useState, useContext } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Form,
} from "react-bootstrap";
import { ListsContext } from "./../context/listContext";

function TestPopOver({ listId, cardId }) {
  const { changeValue } = useContext(ListsContext);
  const [text, setText] = useState("Checklist");

  const popover = (
    <Popover id="checklist">
      <Popover.Title as="h5">Checklist</Popover.Title>
      <Popover.Content>
        <h6>Title</h6>
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
                property: "checklist",
                value: text,
              },
            });
          }}
        >
          Add
        </Button>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={popover}
      rootClose
    >
      <Button
        variant="light"
        className="new-task-hover new-checklist-button"
        block
      >
        <div className="align-left">
          <i
            className="gg-check-r"
            style={{ marginRight: "10px" }}
          />
          Checklist
        </div>
      </Button>
    </OverlayTrigger>
  );
}

export default TestPopOver;
