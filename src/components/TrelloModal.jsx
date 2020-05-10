import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ListsContext } from "../context/listContext";

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
  const [
    showEditDescription,
    setShowEditDescription,
  ] = useState(false);
  const { changeValue } = useContext(ListsContext);

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="trello-modal"
    >
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
          {description && !showEditDescription && (
            <Button
              // onClick={() => setShowEditDescription(true)}
              onClick={() =>
                changeValue({
                  type: "edit description",
                  payload: {
                    listId,
                    cardId,
                    property: "description",
                  },
                })
              }
              className="button-in-modal"
            >
              Edit
            </Button>
          )}
        </h6>
        <p>
          {showEditDescription ? (
            <Form.Control
              defaultValue={description}
              onBlur={() => setShowEditDescription(false)}
              as="textarea"
              autoFocus
            ></Form.Control>
          ) : (
            description
          )}
        </p>
        {checkList &&
          checkList.map((group) => {
            return (
              <div
                style={{ paddingBottom: "30px" }}
                key={group.id}
              >
                <div
                  style={{
                    fontWeight: "500",
                    paddingBottom: "10px",
                  }}
                >
                  <i className="gg-check-r" /> {group.name}
                  <Button className="button-in-modal align-right">
                    Delete
                  </Button>
                </div>
                {group.list.map((option) => {
                  return (
                    <div
                      className="option-hover"
                      key={option.id}
                    >
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
