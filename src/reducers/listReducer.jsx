export const listReducer = (state, action) => {
  const {
    listId,
    cardId,
    property,
    value,
    groupId,
    optionId,
  } = action.payload;
  const listIndex = state.findIndex(
    (list) => list.id === listId
  );
  const list = { ...state[listIndex] };
  const cardIndex = list.cards.findIndex(
    (card) => card.id === cardId
  );

  switch (action.type) {
    case "list title":
      state[listIndex].title = value;
      return [...state];

    case "description":
      state[listIndex].cards[cardIndex][property] = value;
      return [...state];

    case "checklist":
      const card = { ...state[listIndex].cards[cardIndex] };
      const checkListIndex = card.checkList.findIndex(
        (checklist) => checklist.id === groupId
      );
      const checkBoxIndex = card.checkList[
        checkListIndex
      ].options.findIndex(
        (option) => option.id === optionId
      );

      switch (property) {
        case "add":
          state[listIndex].cards[cardIndex].checkList[
            checkListIndex
          ].options.push({ id: Date.now(), name: value });
          break;
        case "checkbox":
          //toggle the boolean
          state[listIndex].cards[cardIndex].checkList[
            checkListIndex
          ].options[checkBoxIndex].checked = !state[
            listIndex
          ].cards[cardIndex].checkList[checkListIndex]
            .options[checkBoxIndex].checked;
          break;

        case "group text":
          state[listIndex].cards[cardIndex].checkList[
            checkListIndex
          ].name = value;
          break;

        case "option text":
          state[listIndex].cards[cardIndex].checkList[
            checkListIndex
          ].options[checkBoxIndex].name = value;
          break;

        case "delete":
          const checkList = state[listIndex].cards[
            cardIndex
          ].checkList.filter(
            (group) => group.id !== groupId
          );
          state[listIndex].cards[
            cardIndex
          ].checkList = checkList;
          break;

        default:
          break;
      }

      return [...state];

    default:
      return state;
  }
};
