import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Teams from './Teams'
import Fixture from './Fixture';

function App() {
  const [openFixture,setOpenFixture] = useState(false);
  const [totalTeams,setTotalTeams] = useState([]);

  if(openFixture)
  {
    return (
      <Fixture/>
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
