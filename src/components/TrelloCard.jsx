import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import TrelloModal from "./TrelloModal";
import Label from "./Label";

function TrelloCard({
  id,
  listId,
  listTitle,
  title: cardTitle,
  description,
  checkList,
  labels,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  let checked = 0;
  let totalChecks = 0;
  if (checkList) {
    checkList.forEach((group) => {
      group.options.forEach((option) => {
        totalChecks++;
        if (option.checked) {
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
        {labels?.length > 0 && <div>{<Label labels={labels} />}</div>}
        <div>{cardTitle}</div>
        <div>
          {description ? <i className="gg-format-left" /> : null}
          {checkList && checkList.length > 0 ? (
            <>
              <i className="gg-check-r" />
              <span className="checks">{`${checked}/${totalChecks}`}</span>
            </>
          ) : null}
          <Button className="edit-icon" disabled>
            {<i className="gg-pen" />}
          </Button>
        </div>
      </Card>
      {showModal ? (
        <TrelloModal
          listId={listId}
          cardTitle={cardTitle}
          cardId={id}
          listTitle={listTitle}
          description={description}
          checkList={checkList}
          showModal={showModal}
          labels={labels}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </>
  );
}

export default TrelloCard;
