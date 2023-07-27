import React from 'react'

export default function ActivityDetail(props) {
  
  return (
    <div>Activity Detail
      <h1>
        id: {props.id}
        time: {props.time}
      </h1>

    </div>
  )
}