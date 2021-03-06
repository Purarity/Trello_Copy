import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import CardTextBox from "./CardTextBox";
import CheckList from "./CheckList";
import Label from "./Label";
import PopOverTrigger from "./PopOverTrigger";

function TrelloModal({
  listId,
  cardTitle,
  cardId,
  listTitle,
  description,
  checkList,
  showModal,
  handleCloseModal,
  labels,
}) {
  const [showEditDescription, setShowEditDescription] = useState(false);
  const [showEditTitle, setShowEditTitle] = useState(false);
  const [text, setText] = useState("");
  const newButtons = ["Checklist", "Labels"];

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      dialogClassName="trello-modal modal-90w"
      enforceFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ width: "100%" }}>
          <div
            onClick={() => {
              setText(cardTitle);
              setShowEditTitle(true);
            }}
          >
            {showEditTitle ? (
              <CardTextBox
                setText={setText}
                text={text}
                setShowEditBox={setShowEditTitle}
                type="card title"
                payload={{
                  listId,
                  cardId,
                  value: text,
                }}
              />
            ) : (
              cardTitle
            )}
          </div>
          <div className="list-title-in-task">
            in list <span className="underline">{listTitle}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Row>
        <Col md={9}>
          <Modal.Body>
            {labels?.length > 0 && <div>{<Label labels={labels} />}</div>}
            <br />
            <h6>
              <i className="gg-format-left" />
              Description
              {description && !showEditDescription && (
                <Button
                  onClick={() => {
                    setText(text ? text : description);
                    setShowEditDescription(true);
                  }}
                  className="button-in-modal"
                >
                  Edit
                </Button>
              )}
            </h6>
            <p
              onClick={() => {
                setText(text ? text : description);
                setShowEditDescription(true);
              }}
            >
              {!description && !showEditDescription && (
                <span style={{ opacity: "80%" }}>
                  Add a more detailed description
                </span>
              )}
              {showEditDescription ? (
                <CardTextBox
                  setText={setText}
                  text={text}
                  setShowEditBox={setShowEditDescription}
                  type="description"
                  payload={{
                    listId,
                    cardId,
                    property: "description",
                    value: text,
                  }}
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
        </Col>
        <Col>
          <div>ADD TO CARD</div>
          {newButtons.map((button) => (
            <PopOverTrigger
              key={button}
              listId={listId}
              cardId={cardId}
              name={button}
            />
          ))}
        </Col>
      </Row>
    </Modal>
  );
}

export default TrelloModal;
