import React from "react";

function LabelsPopOver(props) {
    const 

  const popover = (
    <Popover id="add popover">
      <Popover.Title as="h5">{name}</Popover.Title>
      <Popover.Content>
        <h6>Title</h6>
        <Form.Control
          autoFocus
          as="input"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <Button
          variant="success"
          onClick={() => {
            changeValue({
              type: "new",
              payload: {
                listId,
                cardId,
                property: name.toLower(),
                value: text,
              },
            });
            //hide the popover after clicking Add
            document.body.click();
          }}
        >
          Add
        </Button>
      </Popover.Content>
    </Popover>
  );

  return <div></div>;
}

export default LabelsPopOver;
