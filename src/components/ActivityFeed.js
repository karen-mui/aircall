import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';

export default function ActivityFeed() {

useEffect(() => {
  axios.get(`https://cerulean-marlin-wig.cyclic.app/activities`)
     .then(res => {
       console.log(res.data)
     })
}, []);

  return (
    <div>ActivityFeed</div>
  )
}