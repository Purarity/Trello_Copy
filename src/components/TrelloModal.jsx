import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TaskTextBox from "./TaskTextBox";
import CheckList from "./CheckList";

function TrelloModal({
  listId,
  cardId,
  listTitle,
  taskTitle,
  description,
  checkList,
  showModal,
  handleCloseModal,
}) {
  const [showEditBox, setShowEditBox] = useState(false);
  const [text, setText] = useState("");

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="trello-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          {taskTitle}
          <div className="list-title-in-task">
            in list
            <span className="underline">{listTitle}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Description
          {description && !showEditBox && (
            <Button
              onClick={() => {
                setText(description);
                setShowEditBox(true);
              }}
              className="button-in-modal"
            >
              Edit
            </Button>
          )}
        </h6>
        <p
          onClick={() => {
            setText(description);
            setShowEditBox(true);
          }}
        >
          {showEditBox ? (
            <TaskTextBox
              setText={setText}
              text={text}
              setShowEditBox={setShowEditBox}
              type="description"
              payload={{ listId, cardId, property: "description", value: text }}
            />
          ) : (
            description
          )}
        </p>
        {checkList && (
          <CheckList
            checkList={checkList}
            listId={listId}
            cardId={cardId}
            text={text}
            setText={setText}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default TrelloModal;
