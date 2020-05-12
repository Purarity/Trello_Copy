import React, { useReducer } from "react";
import { CardDeck } from "react-bootstrap";
import TrelloList from "./TrelloList";
import { ListsContext } from "../context/listContext";
import { lists } from "./../fakeService/cardList";
import { listReducer } from "../reducers/listReducer";

function AllListView(props) {
  const [listsState, dispatch] = useReducer(listReducer, lists);

  return (
    <ListsContext.Provider value={{ listsState, changeValue: dispatch }}>
      <div className="list">
        <CardDeck className="list-scroll">
          {listsState.map((list) => {
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
    </ListsContext.Provider>
  );
}
export default AllListView;
