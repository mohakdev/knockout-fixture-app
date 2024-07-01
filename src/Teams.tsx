import React , {useEffect, useState} from 'react';
import { team } from './types';
import './styles/teams.css';

interface teamsProps {
    setOpenFixture : React.Dispatch<React.SetStateAction<boolean>>,
    setBlankFixture : React.Dispatch<React.SetStateAction<boolean>>,
    setTotalTeams : React.Dispatch<React.SetStateAction<team[]>>,
    handleTournamentInfo : (tournament:string,category:string) => void,
    totalTeams : team[],
}

function Teams (props : teamsProps) {

    const [teamName,setTeamName] = useState('');
    const [tournamentName,setTournamentName] = useState('');
    const [categoryName,setCategoryName] = useState('');
    const [teamNo, setTeamNo] = useState(1);
    const startFixure = () => {
        props.handleTournamentInfo(tournamentName,categoryName);
        props.setOpenFixture(true);
    }
    const addTeam = () => {
        let newTeamArr = props.totalTeams.concat({teamName : teamName,teamNo : teamNo, isBye : false});
        props.setTotalTeams(newTeamArr);
        setTeamNo(teamNo + 1);
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Enter key pressed
            addTeam();
            setTeamName('');
        } 
        else {
            setTeamName(event.currentTarget.value);
        }
    }
    return (
        <div id='teamContainer'>
            <h1 className='headingLabel'>Knockout Fixture</h1>
            <div id='fixtureInfoBar'>
                <input className='editText tournamentField' onChange={(e) => setTournamentName(e.target.value)} placeholder='Tournament Name...' type='text' value={tournamentName}/>
                <input className='editText' onChange={(e) => setCategoryName(e.target.value)} placeholder='Category Name...' type='text' value={categoryName}/>
            </div>
            <div id='teamActionBar'>
                <input className='editText' onChange={(e) => setTeamName(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter Name...' type='text' value={teamName}/>
                <button className='btnStyle' onClick={addTeam}>Create Team</button>
                <button className='btnStyle' onClick={() => props.setBlankFixture(true)}>Blank</button>
                <button className='btnStyle' onClick={startFixure}>SUBMIT</button>
            </div>
            <div id='scrollDiv'>
                {props.totalTeams.map((team) => 
                    <div className='teamBox' key={team.teamNo}>
                        <h4 className='teamLabel'>{team.teamName}</h4>
                        <h4 className='teamLabel'># {team.teamNo}</h4>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Teams;