import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';

export default function ActivityFeed() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
      .then(res => {
        console.log(res.data);
        setResults([...res.data]);
      });
  }, []);

  const ActivityItemArray = results.map(call => {
    return (
      <ActivityItem
        key={call.id}
        id={call.id}
      />
    )
  })

  return (
    <div>ActivityFeed
      {ActivityItemArray}
    </div>
  );
}