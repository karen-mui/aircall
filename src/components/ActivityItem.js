import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityDetail from "../pages/ActivityDetail";

export default function ActivityItem(props) {

  return (
    <ListGroup.Item onClick={props.onClick}>
          Caller: {props.caller ? props.caller : "Private"}
          Called to: {props.callee ? props.callee : "Private"}
    </ListGroup.Item>
  );
}