import React , {useState} from 'react';
import { team } from './types';
import './styles/teams.css';

interface teamsProps {
    setOpenFixture : React.Dispatch<React.SetStateAction<boolean>>,
    totalTeams : team[],
    setTotalTeams : React.Dispatch<React.SetStateAction<team[]>>
}

function Teams (props : teamsProps) {
    const [teamName,setTeamName] = useState('');
    const [teamNo, setTeamNo] = useState(1);
    const startFixure = () => {
        props.setOpenFixture(true);
    }
    const addTeam = () => {
        let newTeamArr = props.totalTeams.concat({teamName : teamName,teamNo : teamNo});
        console.log("Total Teams : " + newTeamArr);
        props.setTotalTeams(newTeamArr);
        setTeamNo(teamNo + 1);
    }
    return (
        <div id='teamContainer'>
            <h1 className='headingLabel'>Knockout Fixture</h1>
            <div id='teamActionBar'>
                <input id='teamEditText' onChange={(e) => setTeamName(e.target.value)} placeholder='Enter Name...' type='text' value={teamName}/>
                <button className='btnStyle' onClick={addTeam}>Create Team</button>
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