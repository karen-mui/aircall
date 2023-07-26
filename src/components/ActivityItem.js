import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityDetail from "../pages/ActivityDetail";

export default function ActivityItem(props) {

  const [showCallDetails, setShowCallDetails] = useState(false);


  const handleParentClick = () => {
    showCallDetails === true ? setShowCallDetails(false) : setShowCallDetails(true)
  };

  return (
    // Show ActivityDetail only if showCallDetails is true
    <ListGroup.Item onClick={handleParentClick}>
      {showCallDetails ? (
        <div>
          <ActivityDetail
            key={props.id}
            id={props.id}
            time={props.created_at}
            direction={props.direction}
            caller={props.from}
            callee={props.to}
            aircallNum={props.via}
            duration={props.duration}
            is_archived={props.is_archived}
            type={props.call_type}
          />
        </div>
      ) : (
        <div>
          Caller: {props.caller ? props.caller : "Private"}
          Called to: {props.callee ? props.callee : "Private"}
        </div>
      )}
    </ListGroup.Item>
  );
}