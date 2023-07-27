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

  // handling the click of a specific call 
  const handleItemClick = (callId) => {
    setSelectedCallId(callId);
  };

  // grabbing the specific data of clicked call to send into ActivityDetail
  const getSelectedCallDetails = () => {
    if (selectedCallId !== null) {
      return callData.find(call => call.id === selectedCallId)
    }
    return null;
  };

  // populating all ActivityItems with data
  const ActivityItemArray = callData.map(call => {
    return (
      <ActivityItem
        key={call.id}
        time={call.created_at}
        direction={call.direction}
        caller={call.from}
        callee={call.to}
        onClick={() => handleItemClick(call.id)}
      />
    );
  });

  return (
    <div>ActivityFeed
      {selectedCallId ? (
        // yes selected callId -> display only one Activity's detail
        <ActivityDetail
          {... getSelectedCallDetails()}     
        />
      ) : (
        // no selected callId -> display list of ActivityItems
        <ListGroup>
          {ActivityItemArray}
        </ListGroup>
      )}
    </div>
  );
}