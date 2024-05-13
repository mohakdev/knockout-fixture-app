import { useState } from 'react'
import { team } from './types';
import './App.css'
import Teams from './Teams'
import Fixture from './Fixture';

function App() {
  const [openFixture,setOpenFixture] = useState(false);
  const [totalTeams,setTotalTeams] = useState<team[]>([]);

  if(openFixture)
  {
    return (
      <Fixture totalTeams = {totalTeams}/>
    )
  }
  else 
  {
    return (
      <Teams setOpenFixture={setOpenFixture} totalTeams={totalTeams} setTotalTeams={setTotalTeams}/>
    )
  }
}

export default App
