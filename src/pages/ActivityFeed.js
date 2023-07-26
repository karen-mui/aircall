import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ActivityFeed() {

  const [callData, setCallData] = useState([]);

  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
      .then(res => {
        console.log(res.data);
        setCallData([...res.data]);
      });
  }, []);

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
        is_archived={call.is_archived}
        type={call.call_type}
      />
    )
  })

  return (
    <div>ActivityFeed
      <ListGroup>
      {ActivityItemArray}
      </ListGroup>
    </div>
  );
}