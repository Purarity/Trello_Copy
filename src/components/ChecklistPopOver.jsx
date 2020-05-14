import React, { useState, useContext } from "react";
import {
  Popover,
  OverlayTrigger,
  Button,
  Form,
} from "react-bootstrap";
import { ListsContext } from "./../context/listContext";

function TestPopOver({ listId, cardId, name }) {
  const { changeValue } = useContext(ListsContext);
  const [text, setText] = useState(
    name === "Checklist" ? "Checklist" : ""
  );

  const popover = (
    <Popover id="add popover">
      <Popover.Title as="h5">{name}</Popover.Title>
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
                property: name.toLower(),
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
    </Popover>
  );

  return (
    <>
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
            {name === "Checklist" ? (
              <i
                className="gg-check-r"
                style={{ marginRight: "10px" }}
              />
            ) : (
              <i
                className="gg-tag"
                style={{
                  marginRight: "14px",
                  display: "inline-block",
                }}
              />
            )}

            {name}
          </div>
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default TestPopOver;
