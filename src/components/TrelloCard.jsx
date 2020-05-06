import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Task from "./TrelloTask";

function TrelloCard({ title, tasks }) {
  return (
    <Card style={{ width: "17rem", height: "100%" }} bg="light">
      <Card.Body style={{ padding: "10px" }}>
        <Card.Title className="card-title">
          <Container>
            <Row>
              <Col className="col-10">{title}</Col>
              <Col>
                <Button variant="light" className="card-option-button">
                  •••
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        {tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
        <Button variant="light" block>
          <div className="align-left">
            <i className="gg-math-plus" />
            Add new card
          </div>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TrelloCard;