import React, { useContext } from "react";
import { CardDeck } from "react-bootstrap";
import TrelloList from "./TrelloList";
import { ListsContext } from "../context/listContext";

function ListView(props) {
  const { lists } = useContext(ListsContext);
  return (
    <div className="list">
      <CardDeck className="list-scroll">
        {lists.map((list) => {
          return (
            <TrelloList
              className="card-body"
              as="col"
              key={list.id}
              id={list.id}
              {...list}
            />
          );
        })}
      </CardDeck>
    </div>
  );
}
export default ListView;
