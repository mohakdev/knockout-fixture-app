import React, { useState } from 'react'
import { match } from '../types';
import "../styles/match.css"

function Match(props : match) {
  return (
    <div id='matchBox'>
        <button onClick={(e) => console.log(e.currentTarget)} id = 'firstTeam' className='matchContent'>{props.winner.teamName}</button>
        <h4 id = 'wonLabel' className='matchContent'>Won</h4>
        <button onClick={(e) => console.log(e.currentTarget)} id = 'secondTeam' className='matchContent'>{props.loser.teamName}</button>
    </div>
  )
}

export default Match;