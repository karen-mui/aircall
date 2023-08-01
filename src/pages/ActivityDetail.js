import React from 'react'
import Button from 'react-bootstrap/Button'

export default function ActivityDetail(props) {
  
  return (
    <div>Activity Detail
      <Button onClick={props.onClick}>
        Back 
        </Button>
      <h1>
        id: {props.id}
        time: {props.created_at}
      </h1>
    </div>
  )
}