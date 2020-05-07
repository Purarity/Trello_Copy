import React from "react";
import { CardDeck } from "react-bootstrap";
import TrelloCard from "./TrelloCard";

function TrelloList({ list }) {
  return (
    <div className="list">
      <CardDeck className="list-scroll">
        {list.map((card) => {
          return (
            <TrelloCard
              className="card-body"
              as="col"
              key={card.id}
              {...card}
            />
          );
        })}
      </CardDeck>
    </div>
  );
}
export default TrelloList;
