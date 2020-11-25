import React, { useState, useContext } from "react";
import { Popover, Button, Form } from "react-bootstrap";
import { ListsContext } from "../context/listContext";

const ChecklistPopOver = React.forwardRef(
  ({ listId, cardId, name, ...props }, ref) => {
    const { changeValue } = useContext(ListsContext);
    const [text, setText] = useState("Checklist");

    const popOver = (
      <>
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
                  property: "checklist",
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

    return popOver;
  }
);

export default ChecklistPopOver;
