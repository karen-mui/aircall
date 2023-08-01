import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityDetail from './ActivityDetail';

export default function Archive() {

  const [archivedCallData, setArchivedCallData] = useState([]);
  const [selectedCallId, setSelectedCallId] = useState(null);

  // handling the api calls... retrieving and setting only the archived calls
  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
      .then(res => {
        const archivedCalls = res.data.filter(call => call.is_archived === true);
        console.log(archivedCalls);
        setArchivedCallData(archivedCalls);
      });
  }, []);

  // handling the click of a specific call 
  const handleItemClick = (callId) => {
    setSelectedCallId(callId);
  };

  // grabbing the specific data of clicked call to send into ActivityDetail
  const getSelectedCallDetails = () => {
    if (selectedCallId !== null) {
      return archivedCallData.find(call => call.id === selectedCallId);
    }
    return null;
  };

  // resetting the state to show all ActivityItems when back button is clicked
  const handleBackToFeed = () => {
    setSelectedCallId(null);
  };

  //  populating all ActivityItems with data
  const archivedCallsArray = archivedCallData.map(call => {
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
        <ActivityDetail
          {...getSelectedCallDetails()}
          onClick={handleBackToFeed}
        />
      ) : (
        <div>
          Archive
          <ListGroup>
            {archivedCallsArray}
          </ListGroup>
        </div>
      )}
    </div >
  );
}