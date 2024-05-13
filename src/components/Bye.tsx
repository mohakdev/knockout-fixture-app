import '../styles/match.css';
import { team } from '../types';
import "../styles/match.css"

function Bye(props : team) {
  return (
    <div id='byeBox'>
        <button onClick={(e) => console.log(e.currentTarget)} id = 'byeLabel' className='matchContent'>{props.teamName}</button>
        <h4 id = 'wonLabel' className='matchContent'>BYE</h4>
    </div>
  )
}

export default Bye;