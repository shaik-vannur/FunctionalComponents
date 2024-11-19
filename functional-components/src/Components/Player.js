import React from 'react'

function Player(props) {
  return (
    <div className="players-div">
      <img src={props.imgURL}></img>
      <h2>Name: {props.name}</h2>
      <h2>Team: {props.team}</h2>
      <h2>Role: {props.role}</h2>
      <h2>Country:{props.country}</h2>
    </div>
  )
}

export default Player
