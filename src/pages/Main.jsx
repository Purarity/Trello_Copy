import React, { useReducer, useEffect } from "react";
import ListView from "../components/ListView";
import { lists } from "./../fakeService/cardList";
import { ListsContext } from "../context/listContext";

const initialState = lists;
const reducer = (state, action) => {
  switch (action.type) {
    case "edit description":
      const listIndex = state.findIndex(
        (list) => list.id === action.payload.listId
      );
      const list = { ...state[listIndex] };
      const cardIndex = list.cards.findIndex(
        (card) => card.id === action.payload.cardId
      );
      state[listIndex].cards[cardIndex].description =
        "description changed";
      console.log(state);
      return [...state];

    default:
      return state;
  }
};

function Main(props) {
  const [listsState, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {});

  return (
    <>
      <ListsContext.Provider
        value={{ lists: listsState, changeValue: dispatch }}
      >
        <ListView />
      </ListsContext.Provider>
    </>
  );
}

export default Main;
