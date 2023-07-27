import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function ActivityItem(props) {

  return (
    <ListGroup.Item onClick={props.onClick}>
          Caller: {props.from ? props.from : "Private"}
          Called to: {props.to ? props.to : "Private"}
    </ListGroup.Item>
  );
}