import React, { useState, useContext } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import TrelloCard from "./TrelloCard";
import { ListsContext } from "./../context/listContext";

function TrelloList({ title, cards, id }) {
  const { changeValue } = useContext(ListsContext);
  const [showNewCard, setShowNewCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const createNewCard = (cardTitle) => {
    if (cardTitle) {
      changeValue({
        type: "new",
        payload: {
          listId: id,
          value: cardTitle,
          property: "card",
        },
      });
    }
    setShowNewCard(false);
  };

  return (
    <Card style={{ width: "16rem", height: "100%" }} bg="light">
      <Card.Body style={{ padding: "10px" }}>
        <Card.Title className="card-title">
          <Container>
            <Row>
              <Col className="col-10">{title}</Col>
              <Col>
                <Button variant="light" className="card-option-button" disabled>
                  •••
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        {cards.map((card) => {
          return (
            <TrelloCard key={card.id} listTitle={title} listId={id} {...card} />
          );
        })}
        {showNewCard ? (
          <Form.Control
            autoFocus
            as="textarea"
            placeholder="Enter a title for this card..."
            value={cardTitle}
            onBlur={() => createNewCard(cardTitle)}
            onChange={(event) => {
              setCardTitle(event.currentTarget.value);
            }}
          />
        ) : (
          <Button
            variant="light"
            className="new-task-hover"
            onClick={() => setShowNewCard(true)}
            block
          >
            <div className="align-left">
              <i className="gg-math-plus" />
              Add new card
            </div>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default TrelloList;
