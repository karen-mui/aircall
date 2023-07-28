import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityDetail from './ActivityDetail';

export default function ActivityFeed() {
  const [callData, setCallData] = useState([]);
  const [selectedCallId, setSelectedCallId] = useState(null);

  // handling the api call... retrieving and setting only unarchived calls
  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
      .then(res => {
        const unarchivedCalls = res.data.filter(call => call.is_archived === false);
        // console.log(res.data)
        // console.log(unarchivedCalls);
        setCallData(unarchivedCalls);
      });
  }, []);

  // handling the click of a specific call 
  const handleItemClick = (callId) => {
    setSelectedCallId(callId);
  };

  // grabbing the specific data of clicked call to send into ActivityDetail
  const getSelectedCallDetails = () => {
    if (selectedCallId !== null) {
      return callData.find(call => call.id === selectedCallId);
    }
    return null;
  };

  // resetting the state to show all ActivityItems when back button is clicked
  const handleBackToFeed = () => {
    setSelectedCallId(null);
  };

  // populating all ActivityItems with data
  const ActivityItemArray = callData.map(call => {
    return (
      <ActivityItem
        key={call.id}
        {...call}
        onClick={() => handleItemClick(call.id)}
      />
    );
  });

  return (
    <div>
      {selectedCallId ? (
        // yes selected callId -> display only one Activity's detail
        <ActivityDetail
          {...getSelectedCallDetails()}
          onClick={handleBackToFeed}
        />
      ) : (
        // no selected callId -> display list of ActivityItems
        <div>
          Activity Feed
          <ListGroup>
            {ActivityItemArray}
          </ListGroup>
        </div>
      )}
    </div>
  );
}