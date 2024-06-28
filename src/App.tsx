import { useState } from 'react'
import { team } from './types';
import './App.css'
import Teams from './Teams'
import Fixture from './Fixture';

function App() {
  const [openFixture,setOpenFixture] = useState(false);
  const [totalTeams,setTotalTeams] = useState<team[]>([]);
  const [blankFixture,setBlankFixture] = useState(false);
  
  if(openFixture)
  {
    return (
      <Fixture totalTeams = {totalTeams} isBlankFixture = {blankFixture}/>
    )
  }
  else 
  {
    return (
      <Teams setOpenFixture={setOpenFixture} setBlankFixture={setBlankFixture} totalTeams={totalTeams} setTotalTeams={setTotalTeams}/>
    )
  }
}

export default App;
