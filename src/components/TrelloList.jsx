import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import TrelloCard from "./TrelloCard";

function TrelloList({ title, tasks }) {
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
        {tasks.map((task) => {
          return <TrelloCard key={task.id} listTitle={title} {...task} />;
        })}
        <Button variant="light" className="new-task-hover" block disabled>
          <div className="align-left">
            <i className="gg-math-plus" />
            Add new card
          </div>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TrelloList;
