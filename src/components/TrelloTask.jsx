import React from "react";
import { Card } from "react-bootstrap";

function Task({ id, title, description, checkList }) {
  return (
    <Card className="p-2 m-1 taskHover" key={id}>
      <div>
        {description ? <i className="gg-format-left" /> : null}
        {checkList ? <i className="gg-check-r" /> : null}
      </div>
      <div>{title}</div>
    </Card>
  );
}

export default Task;
