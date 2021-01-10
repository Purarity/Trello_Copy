import React from "react";
import { Button } from "react-bootstrap";
import buttonColor from "../utils/buttonColor.json";

function Label({ labels }) {
  return labels.map((label) => (
    <Button
      key={label.id}
      style={{
        marginRight: "3px",
        marginBottom: "3px",
      }}
      variant={buttonColor[label.color]}
      disabled
    >
      {label.name}
    </Button>
  ));
}

export default Label;
