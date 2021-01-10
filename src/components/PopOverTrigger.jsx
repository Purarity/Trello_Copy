import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import ChecklistPopOver from "./ChecklistPopOver";
import LabelPopOver from "./LabelPopOver";

function PopOverTrigger({ listId, cardId, name }) {
  let popover;

  switch (name) {
    case "Checklist":
      popover = (
        <Popover id="popover-basic">
          <ChecklistPopOver listId={listId} cardId={cardId} name={name} />
        </Popover>
      );
      break;

      case "Labels":
      popover = (
        <Popover id="popover-basic">
          <LabelPopOver listId={listId} cardId={cardId} name={name} />
        </Popover>
      );
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
            <i className="gg-check-r" style={{ marginRight: "10px" }} />
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
