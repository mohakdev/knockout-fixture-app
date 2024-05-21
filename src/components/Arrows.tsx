import React from 'react';
import Xarrow from "react-xarrows";
import { fixtureInfo, match, round, team } from '../types';

interface arrowProps {
    currentMatch : match,
}
let prevMatchIndex = 0;
function GetStartId() : string {
    let returnId = 'match-' + prevMatchIndex;
    prevMatchIndex++;
    console.log(returnId);
    return returnId;
}
function Arrows(props : arrowProps) : JSX.Element {
   if(props.currentMatch.roundNo >= 1) {
        return(<>
        <Xarrow start={GetStartId()} end={props.currentMatch.matchId} color='#146C68' path='grid'/>
        <Xarrow start={GetStartId()} end={props.currentMatch.matchId} color='#146C68' path='grid'/> 
        </>);
   }
   return <></>;
}

export default Arrows;