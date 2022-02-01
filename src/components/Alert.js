import { Alert } from "@mui/material";
import React from "react";

function Alerts(props) {
  return (
    <div>
      <Alert severity="success">{props.message} — check it out!</Alert>
    </div>
  );
}

export default Alerts;
