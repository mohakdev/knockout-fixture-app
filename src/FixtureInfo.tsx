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
function calByes(N : number) : number[] {
    const noOfByes = 2**calRounds(N) - N;
    let byesPosition : number[] = new Array(noOfByes);
    return byesPosition;
}
function calRoundOneMatches(N: number): number {
    const noOfByes = 2**calRounds(N) - N;
    return noOfByes + ((N - noOfByes) / 2);
}

function calUH(N : number) : number {
    if(N%2==0) {
        return N/2;
    }
    else {
        return (N+1)/2;
    }
}

function calFixtureInfo(totalTeams : team[]) : fixtureInfo {
    return {
        numOfMatches : totalTeams.length - 1,
        numOfRounds : calRounds(totalTeams.length),
        numOfUH : calUH(totalTeams.length),
        numOfMatchesRoundOne : calRoundOneMatches(totalTeams.length),
        byes : calByes(totalTeams.length),
    };
}
export default calFixtureInfo;

