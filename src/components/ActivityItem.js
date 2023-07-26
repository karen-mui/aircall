import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ActivityItem(props) {
  return (
    <ListGroup.Item>
      Caller: {props.caller ? props.caller : "Private"}
      Called to: {props.callee ? props.callee : "Private"}
    </ListGroup.Item>
    );
}