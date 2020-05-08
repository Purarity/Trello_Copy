import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function TrelloModal({
  listTitle,
  taskTitle,
  description,
  checkList,
  showModal,
  handleCloseModal,
}) {
  const [editDescriptionBox, setEditDescriptionBox] = useState(false);

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="trello-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          {taskTitle}
          <div className="list-title-in-task">
            in list <span className="underline">{listTitle}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>
          Description
          {description && (
            <Button
              onClick={() => setEditDescriptionBox(true)}
              className="button-in-modal"
            >
              Edit
            </Button>
          )}
        </h6>
        <p>
          {editDescriptionBox ? (
            <Form.Control as="textarea"></Form.Control>
          ) : (
            description
          )}
        </p>
        {checkList &&
          checkList.map((group) => {
            return (
              <div style={{ paddingBottom: "30px" }} key={group.id}>
                <div style={{ fontWeight: "500", paddingBottom: "10px" }}>
                  <i className="gg-check-r" /> {group.name}
                  <Button className="button-in-modal align-right">
                    Delete
                  </Button>
                </div>
                {group.list.map((option) => {
                  return (
                    <div className="option-hover" key={option.id}>
                      {option.checked ? (
                        <i className="gg-check-r pointer" />
                      ) : (
                        <i className="empty-box pointer" />
                      )}
                      {option.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </Modal.Body>
    </Modal>
  );
}

export default TrelloModal;
