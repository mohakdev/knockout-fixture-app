import './App.css';
import './styles/general.css'
import { fixtureInfo, round, team } from './types';
import Match from './components/Match';
import calFixtureInfo from './FixtureInfo';
import Arrows from './components/Arrows';

interface fixtureProps {
  totalTeams : team[],
  isBlankFixture : boolean
}

function Fixture(props : fixtureProps) {

  const fixtureStats : fixtureInfo = calFixtureInfo(props.totalTeams);
  let rounds : round[] = GenerateRounds(props.totalTeams,fixtureStats);
  
  console.log("Rounds Array = ",rounds);
  return (  
    <div id='fixtureTable'>
      {rounds.map((round) => (
        <div key={round.roundNo} className='fixtureRound'>
          {round.matches.map((match) => (
            <div key={match.matchId}>
              <Match key={match.matchNo} match={match} isBlankFixture={props.isBlankFixture}/>
              <Arrows key={match.matchId} currentMatch={match}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

let matchNumber = 0;
let roundNumber = 0;

function GenerateRounds(teams : team[], fixtureStats: fixtureInfo) : round[] {
  let totalRounds : round[] = new Array(fixtureStats.numOfRounds);
  // Step 1: Generate first round seperately and make sure to set up byes as well
  totalRounds[roundNumber] = GenerateFirstRound(teams,fixtureStats);
  // Step 2: From here generate subsequent rounds by taking winning teams from totalRounds[0]
  // and making matches between them, do this till there are only 2 winning teams
  do {
    roundNumber++;
    totalRounds[roundNumber] = GenerateSubsequentRounds(totalRounds[roundNumber - 1],roundNumber);
  }
  while (totalRounds[roundNumber].matches.length > 1);
  return totalRounds;
}

function GenerateSubsequentRounds(prevRound : round,roundNumber : number) : round {
  const winners : team[] = [];
  let round : round = {roundNo: roundNumber, matches: new Array(prevRound.matches.length / 2)}
  
  prevRound.matches.forEach((prevRoundMatch) => {
    winners.push(prevRoundMatch.winner);
  })
  
  let teamsIndex = 0;
  for(let j = 0; j < round.matches.length; j++) 
  {
    round.matches[j] = {
      matchNo : matchNumber,
      matchId : "match-" + matchNumber,
      roundNo : roundNumber,
      isBye : false,
      teamsPlaying : [winners[teamsIndex],winners[teamsIndex+1]],
      winner: winners[teamsIndex],
      loser : winners[teamsIndex + 1],
    }
    teamsIndex += 2;
    matchNumber++;
  }
  return round;
}

function GenerateFirstRound(teams : team[], fixtureStats: fixtureInfo) : round {
  let teamsIndex = 0;
  let roundOne : round = {roundNo : 0, matches : new Array(fixtureStats.numOfMatchesRoundOne)};
  for(let j =0; j < roundOne.matches.length; j++) 
  {
    let teamsInMatch : team[] = [];
    if(teams[teamsIndex].isBye) { teamsInMatch = [teams[teamsIndex]]; }
    else {teamsInMatch = [teams[teamsIndex],teams[teamsIndex + 1]]}
    roundOne.matches[j] = {
      matchNo : matchNumber, 
      matchId : "match-" + matchNumber,
      roundNo : roundOne.roundNo, 
      isBye: teams[teamsIndex].isBye,
      teamsPlaying : teamsInMatch,
      winner : teamsInMatch[0],
      loser : teamsInMatch[1],
    }
    if(teams[teamsIndex].isBye) { teamsIndex++; }
    else {teamsIndex += 2;}
    matchNumber++;
  }
  return roundOne;
}


export default Fixture;

{/* <div id='element1'>This is first div</div>
<div id='element2'>This is second div</div>
<Xarrow start='element1' end='element2' showHead={false} color='#1D9691' path='straight'/> */}