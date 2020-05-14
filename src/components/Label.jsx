import React from "react";
import { Button } from "react-bootstrap";
import { getButtonColor } from "../utils/buttonColor";

function Label({ labels }) {
  return labels.map((label) => (
    <Button
      key={label.id}
      style={{
        marginRight: "3px",
        marginBottom: "3px",
      }}
      variant={getButtonColor(label.color)}
      disabled
    >
      {label.name}
    </Button>
  ));
}

export default Label;
