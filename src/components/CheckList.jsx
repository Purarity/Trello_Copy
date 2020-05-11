import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { ListsContext } from "./../context/listContext";
import TaskTextBox from "./TaskTextBox";

function CheckList({ checkList, listId, cardId, text, setText }) {
  const [showEditOption, setShowEditOption] = useState(false);
  const [showEditGroup, setShowEditGroup] = useState(false);
  const { changeValue } = useContext(ListsContext);

  return checkList.map((group) => {
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
              setText(group.name);
              setShowEditGroup({ state: true, id: group.id });
            }}
          >
            {showEditGroup.state === true && showEditGroup.id === group.id ? (
              <TaskTextBox
                text={text}
                setText={setText}
                setShowEditBox={setShowEditGroup}
                type="checklist"
                payload={{
                  groupId: group.id,
                  listId,
                  cardId,
                  property: "group text",
                  value: text,
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
          const payload = {
            listId,
            cardId,
            groupId: group.id,
            optionId: option.id,
            value: text,
          };
          return (
            <div className="option-hover" key={option.id}>
              <span
                onClick={() =>
                  changeValue({
                    type: "checklist",
                    payload: { ...payload, property: "checkbox" },
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
                  setText(option.name);
                  setShowEditOption({ state: true, id: option.id });
                }}
              >
                {showEditOption.state === true &&
                showEditOption.id === option.id ? (
                  <TaskTextBox
                    text={text}
                    setText={setText}
                    setShowEditBox={setShowEditOption}
                    type="checklist"
                    payload={{
                      ...payload,
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
      </div>
    );
  });
}

export default CheckList;
