import { match } from '../types';
import "../styles/match.css";
import { LegacyRef } from 'react';

interface matchProps {
  match : match,
}

function Match(props : matchProps) 
{
  if(props.match.roundNo == 0 && props.match.isBye == true) //Bye Teams
  {
    return (
      <div id={props.match.matchId} className='byeBox'>
        <button onClick={(e) => console.log(e.currentTarget)} className='byeContent'>{props.match.teamsPlaying[0].teamName}</button>
        <h4 id = 'byeLabel' className='byeContent'>BYE</h4>
      </div>
    )
  }
  else //Normal Match
  {
    return (
      <div id={props.match.matchId} className='matchBox'>
          <button onClick={(e) => console.log(e.currentTarget)} id = 'firstTeam' className='matchContent'>{props.match.winner.teamName}</button>
          <h4 id = 'wonLabel' className='matchContent'>Won</h4>
          <button onClick={(e) => console.log(e.currentTarget)} id = 'secondTeam' className='matchContent'>{props.match.loser.teamName}</button>
      </div>
    )
  }
}

export default Match;