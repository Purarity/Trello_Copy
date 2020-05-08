import React from "react";
import { CardDeck } from "react-bootstrap";
import TrelloList from "./TrelloList";

function ListView({ list }) {
  return (
    <div className="list">
      <CardDeck className="list-scroll">
        {list.map((card) => {
          return (
            <TrelloList
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
export default ListView;
