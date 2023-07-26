import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityDetail from './ActivityDetail';

export default function ActivityFeed() {
  const [callData, setCallData] = useState([]);
  const [selectedCallId, setSelectedCallId] = useState(null);

  // handling the api call...
  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
      .then(res => {
        console.log(res.data);
        setCallData([...res.data]);
      });
  }, []);

  // handling the clicking of a specific call (showing details)
  const handleItemClick = (callId) => {
    setSelectedCallId(callId);
  };

  const ActivityItemArray = callData.map(call => {
    return (
      <ActivityItem
        key={call.id}
        id={call.id}
        time={call.created_at}
        direction={call.direction}
        caller={call.from}
        callee={call.to}
        aircallNum={call.via}
        duration={call.duration}
        onClick={() => handleItemClick(call.id)}
      />
    );
  });

  return (
    <div>ActivityFeed
      {selectedCallId ? (
        // yes selected callId -> display only that ActivityItems's detail
        <ActivityDetail
          key={selectedCallId}
          id={selectedCallId}
          // time={call.created_at}
          // direction={call.direction}
          // caller={call.from}
          // callee={call.to}
          // aircallNum={call.via}
          // duration={call.duration}
          // is_archived={call.is_archived}
          // type={call.call_type} 
          
        />
      ) : (
        // no selected callId -> display list
        <ListGroup>
          {ActivityItemArray}
        </ListGroup>
      )}
    </div>
  );
}