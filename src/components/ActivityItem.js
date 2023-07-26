import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export default function ActivityItem(props) {

  const click = () => {
    console.log('i was clicked')
  }

  return (
      <ul onClick={click}>
    <ListGroup.Item>
        Caller: {props.caller ? props.caller : "Private"}
        Called to: {props.callee ? props.callee : "Private"}
    </ListGroup.Item>
      </ul>
  );
}