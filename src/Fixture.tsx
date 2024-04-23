import React from 'react'
import Xarrow from "react-xarrows";
import './App.css';
import Match from './components/Match';
import { team } from './types';

function Fixture() {
  const teamOne : team = {teamName : 'RR', teamNo : 1}
  const teamTwo : team = {teamName : 'MI', teamNo : 2}

  return (
    <div>
      <Match matchNo={1} roundNo={1} 
      teamsPlaying={[teamOne,teamTwo]} winner={teamOne} loser={teamTwo} nextMatchNo={2}/>
    </div>
  )
}

export default Fixture

{/* <div id='element1'>This is first div</div>
<div id='element2'>This is second div</div>
<Xarrow start='element1' end='element2' showHead={false} color='#1D9691' path='straight'/> */}