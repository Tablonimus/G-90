import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

export default function Descripcion({ text }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Ver descripción
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">{text}</div>
      </Collapse>
    </>
  );
}
