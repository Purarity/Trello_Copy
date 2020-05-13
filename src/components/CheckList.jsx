import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ListsContext } from "./../context/listContext";
import CardTextBox from "./CardTextBox";

function CheckList({
  checkList,
  listId,
  cardId,
  text,
  setText,
}) {
  const [showEditGroup, setShowEditGroup] = useState(false);
  const [showEditOption, setShowEditOption] = useState(
    false
  );
  const [showAddOption, setShowAddOption] = useState(false);
  const { changeValue } = useContext(ListsContext);

  return checkList.map((group) => {
    const groupPayload = {
      listId,
      cardId,
      groupId: group.id,
      value: text,
    };
    return (
      <div style={{ paddingBottom: "30px" }} key={group.id}>
        <div
          style={{
            fontWeight: "500",
            paddingBottom: "10px",
          }}
        >
          <i className="gg-check-r" />
          <span
            onClick={() => {
              setText(text ? text : group.name);
              setShowEditGroup({
                state: true,
                id: group.id,
              });
            }}
          >
            {showEditGroup.state === true &&
            showEditGroup.id === group.id ? (
              <CardTextBox
                text={text}
                setText={setText}
                setShowEditBox={setShowEditGroup}
                type="checklist"
                payload={{
                  listId,
                  cardId,
                  value: text,
                  groupId: group.id,
                  property: "group text",
                }}
              />
            ) : (
              group.name
            )}
          </span>
          <Button
            onClick={() =>
              changeValue({
                type: "checklist",
                payload: {
                  groupId: group.id,
                  listId,
                  cardId,
                  property: "delete",
                },
              })
            }
            className="button-in-modal align-right"
          >
            Delete
          </Button>
        </div>
        {group.options.map((option) => {
          const optionPayload = {
            ...groupPayload,
            optionId: option.id,
          };
          return (
            <div className="option-hover" key={option.id}>
              <span
                onClick={() =>
                  changeValue({
                    type: "checklist",
                    payload: {
                      ...optionPayload,
                      property: "checkbox",
                    },
                  })
                }
              >
                {option.checked ? (
                  <i className="gg-check-r pointer" />
                ) : (
                  <i className="empty-box pointer" />
                )}
              </span>
              <span
                onClick={() => {
                  setText(text ? text : option.name);
                  setShowEditOption({
                    state: true,
                    id: option.id,
                  });
                }}
              >
                {showEditOption.state === true &&
                showEditOption.id === option.id ? (
                  <CardTextBox
                    text={text}
                    setText={setText}
                    setShowEditBox={setShowEditOption}
                    type="checklist"
                    payload={{
                      ...optionPayload,
                      property: "option text",
                      value: text,
                    }}
                  />
                ) : (
                  option.name
                )}
              </span>
            </div>
          );
        })}
        {showAddOption.state === true &&
        showAddOption.id === group.id ? (
          <>
            <CardTextBox
              text={text}
              setText={setText}
              setShowEditBox={setShowAddOption}
              noEmptyText
              type="checklist"
              payload={{
                ...groupPayload,
                property: "add",
                value: text,
              }}
            />
            <Button
              variant="success"
              onClick={() => {
                setShowAddOption(false);
                changeValue({
                  type: "checklist",
                  payload: {
                    ...groupPayload,
                    text,
                    property: "add",
                  },
                });
              }}
            >
              Add
            </Button>
          </>
        ) : (
          <Button
            className="button-in-modal"
            style={{ marginLeft: "24px", marginTop: "5px" }}
            onClick={() => {
              setText(text ? text : "");
              setShowAddOption({
                state: true,
                id: group.id,
              });
            }}
          >
            Add an item
          </Button>
        )}
      </div>
    );
  });
}

export default CheckList;
