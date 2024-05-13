import { team , fixtureInfo } from "./types";

function calRounds(N : number) {
    for(let l = 1; l < N; l++)
    {
        if(2**l >= N)
        {
            return l;
        }
    }
    return 0;
}
function calByes(N : number) {
    return 2**calRounds(N) - N;
}
function calHalves(N : number, supplement : number) {
    if(N%2 == 0) {
        return N/2;
    }
    else {
        return (N+supplement)/2;
    }
}
function calByesinHalves(N : number, supplement : number) {
    if(calByes(N)%2 == 0) {
        return N/2;
    }
    else {
        return (calByes(N)+supplement)/2;
    }
}

function calFixtureInfo(totalTeams : team[]) : fixtureInfo {
    return {
        numOfMatches : totalTeams.length,
        numOfRounds : calRounds(totalTeams.length),
        numOfByes : calByes(totalTeams.length),
        numOfUH : calHalves(totalTeams.length,1),
        numOfLH: calHalves(totalTeams.length,-1),
        numOfByesInUH : calByesinHalves(totalTeams.length,-1),
        numOfByesInLH : calByesinHalves(totalTeams.length,+1),
    };
}
export default calFixtureInfo;
