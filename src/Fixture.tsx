import React, { ReactNode } from 'react'
import Xarrow from "react-xarrows";
import './App.css';
import './styles/general.css'
import { fixtureInfo, match, team } from './types';
import Match from './components/Match';
import Bye from './components/Bye';
import calFixtureInfo from './FixtureInfo';

interface fixtureProps {
  totalTeams : team[]
}

function Fixture(props : fixtureProps) {
  const teamOne : team = {teamName : 'RR', teamNo : 1}
  const teamTwo : team = {teamName : 'MI', teamNo : 2}

  const fixtureStats : fixtureInfo = calFixtureInfo(props.totalTeams);
  const noOfMatchesInRounds = () => {
    let rounds : number[] = [fixtureStats.numOfRounds]
    for(let k = 0; k < fixtureStats.numOfRounds; k++)
    {
      rounds[k] = (props.totalTeams.length / 2) / 2**k;
    }
    return rounds;
  }
  
  let rounds : number[] = noOfMatchesInRounds();  
  let teamsIndex : number = -2;
  
  const renderFixture : ReactNode = rounds.map((numbOfMatches,roundNo) => {
    console.log("Number of Matches in Round " + roundNo + " is " + numbOfMatches);
    let matchesInCurrentRound : number[] = new Array(numbOfMatches);
    for(let l = 0; l < matchesInCurrentRound.length; l++)
    {
      matchesInCurrentRound[l] = l;
    }
    console.log(matchesInCurrentRound);
    teamsIndex += 2;
    return <div className='fixtureRound'>
      {matchesInCurrentRound.map((matchNo,num) => (
        <Match key={matchNo} matchNo={matchNo} roundNo={roundNo} 
        teamsPlaying={[props.totalTeams[teamsIndex],props.totalTeams[teamsIndex + 1]]}
        winner={props.totalTeams[teamsIndex]}
        loser={props.totalTeams[teamsIndex + 1]}
        nextMatchNo={null}/>
      ))}
    </div>
  })
  return (
    <div id='fixtureTable'>
      {renderFixture}
    </div>
  )
}

export default Fixture

{/* <div id='element1'>This is first div</div>
<div id='element2'>This is second div</div>
<Xarrow start='element1' end='element2' showHead={false} color='#1D9691' path='straight'/> */}