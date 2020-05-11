import React, { useReducer, useEffect } from "react";
import AllListView from "../components/AllListView";
import { lists } from "./../fakeService/cardList";
import { ListsContext } from "../context/listContext";

const reducer = (state, action) => {
  const { listId, cardId, property, value, groupId, optionId } = action.payload;
  const listIndex = state.findIndex((list) => list.id === listId);
  const list = { ...state[listIndex] };
  const cardIndex = list.cards.findIndex((card) => card.id === cardId);

  switch (action.type) {
    case "description":
      state[listIndex].cards[cardIndex][property] = value;
      return [...state];

    case "checklist":
      const card = { ...state[listIndex].cards[cardIndex] };
      const checkListIndex = card.checkList.findIndex(
        (checklist) => checklist.id === groupId
      );
      const checkBoxIndex = card.checkList[checkListIndex].options.findIndex(
        (option) => option.id === optionId
      );

      if (action.payload.property === "checkbox") {
        //toggle the boolean
        state[listIndex].cards[cardIndex].checkList[checkListIndex].options[
          checkBoxIndex
        ].checked = !state[listIndex].cards[cardIndex].checkList[checkListIndex]
          .options[checkBoxIndex].checked;
      } else if (action.payload.property === "option text") {
        state[listIndex].cards[cardIndex].checkList[checkListIndex].options[
          checkBoxIndex
        ].name = value;
      } else if (action.payload.property === "delete") {
        const checkList = state[listIndex].cards[cardIndex].checkList.filter(
          (group) => group.id !== groupId
        );
        state[listIndex].cards[cardIndex].checkList = checkList;
      } else if (action.payload.property === "group text") {
        state[listIndex].cards[cardIndex].checkList[
          checkListIndex
        ].name = value;
      }

      return [...state];

    default:
      return state;
  }
};

function Main(props) {
  const [listsState, dispatch] = useReducer(reducer, lists);

  useEffect(() => {});

  return (
    <>
      <ListsContext.Provider
        value={{ lists: listsState, changeValue: dispatch }}
      >
        <AllListView />
      </ListsContext.Provider>
    </>
  );
}

export default Main;
