import React from "react";
import { CardDeck } from "react-bootstrap";
import { list } from "../fakeService/cardList";
import TrelloCard from "../components/TrelloCard";

function TrelloList(props) {
  return (
    <div className="list">
      <CardDeck>
        {list.map((card) => {
          return (
            <TrelloCard
              className="card-body"
              key={card.id}
              {...card}
            ></TrelloCard>
          );
        })}
      </CardDeck>
    </div>
  );
}
export default TrelloList;
