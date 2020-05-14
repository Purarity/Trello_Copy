import React from "react";
import { OverlayTrigger, Button } from "react-bootstrap";
import ChecklistPopOver from "./ChecklistPopOver copy";

function PopOverTrigger({ listId, cardId, name }) {
  let popover;

  switch (name) {
    case "Checklist":
      popover = React.forwardRef(({ ...props }, ref) => (
        <ChecklistPopOver
          listId={listId}
          cardId={cardId}
          name={name}
          ref={ref}
        />
      ));
      break;

    default:
      break;
  }
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
  );
}

export default PopOverTrigger;
