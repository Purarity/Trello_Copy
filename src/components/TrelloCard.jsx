import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import TrelloModal from "./TrelloModal";

function TrelloCard({
  id,
  listId,
  listTitle,
  title: taskTitle,
  description,
  checkList,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

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
    <>
      <Card
        onClick={handleShowModal}
        className="p-2 m-1 task-hover pointer"
        key={id}
      >
        <div>
          {description ? (
            <i className="gg-format-left" />
          ) : null}
          {checkList ? (
            <>
              <i className="gg-check-r" />
              <span className="checks">{`${checked}/${totalChecks}`}</span>
            </>
          ) : null}
          <Button className="edit-icon" disabled>
            {<i className="gg-pen" />}
          </Button>
        </div>
        <div>{taskTitle}</div>
      </Card>
      {showModal ? (
        <TrelloModal
          listId={listId}
          cardId={id}
          listTitle={listTitle}
          taskTitle={taskTitle}
          description={description}
          checkList={checkList}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </>
  );
}

export default TrelloCard;
