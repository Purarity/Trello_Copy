import React from "react";
import { Card, Button } from "react-bootstrap";

function Task({ id, title, description, checkList }) {
  let checked = 0;
  let totalChecks = 0;
  if (checkList) {
    checkList.forEach((list1) => {
      list1.list.forEach((list2) => {
        totalChecks++;
        if (list2.checked) {
          checked++;
        }
      });
    });
  }
  return (
    <Card
      onClick={() => {
        console.log("clicked task");
      }}
      className="p-2 m-1 task-hover pointer"
      key={id}
    >
      <div>
        {description ? <i className="gg-format-left" /> : null}
        {checkList ? (
          <>
            <i className="gg-check-r" />{" "}
            <span className="checks">{`${checked}/${totalChecks}`}</span>
          </>
        ) : null}
        <Button className="edit-icon" disabled>
          {<i className="gg-pen" />}
        </Button>
      </div>
      <div>{title}</div>
    </Card>
  );
}

export default Task;
