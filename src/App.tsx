import { useState } from 'react'
import { team } from './types';
import Teams from './Teams'
import Fixture from './Fixture';
import './App.css';
import './styles/general.css';
import Clock from './assets/Clock.svg'

function App() {
  const [openFixture,setOpenFixture] = useState(false);
  const [totalTeams,setTotalTeams] = useState<team[]>([]);
  const [tournamentName,setTournamentName] = useState('');
  const [categoryName,setCategoryName] = useState('');

  const [blankFixture,setBlankFixture] = useState(false);
  
  const handleTournamentInfo = (tournament : string, category : string) => {
    setTournamentName(tournament);
    setCategoryName(category);
  }
  if(openFixture)
  {
    return (
      <>
        <div id='fixtureInfo'>
          <h1 id='tournamentName'>{tournamentName}</h1>
          <h4 id='categoryLabel'>Category: {categoryName}</h4>
        </div>
        <Fixture totalTeams = {totalTeams} isBlankFixture = {blankFixture}/>
      </>
    )
  }
  else 
  {
    return (
      <Teams setOpenFixture={setOpenFixture} 
      setBlankFixture={setBlankFixture} 
      setTotalTeams={setTotalTeams}
      handleTournamentInfo={handleTournamentInfo}
      totalTeams={totalTeams}/> 
    )
  }
}

export default App;
