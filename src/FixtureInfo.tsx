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
function calByes(N : number) : number {
    return 2**calRounds(N) - N;
}
function calByesBoolean(totalTeams : team[]) {  
    //Setting up byes boolean
    for(let j = 0; j < totalTeams.length; j++)
    {
        if(calByesPosition(totalTeams.length).includes(j))
        {
            totalTeams[j].isBye = true;
        }
        else 
        {
            totalTeams[j].isBye = false;
        }
    }
}

function calByesPosition(N : number) : number[] {
    let byesPosition : number[] = new Array(calByes(N));
    let byesCount = 0;
    for(let j = 0; j < byesPosition.length; j++)
    {
        //Bye Order: BB - TT - BT - TB
        if(byesCount == 0) {
            byesPosition[j] = N - 1;
        }
        else if (byesCount == 1)
        {
            byesPosition[j] = 0;   
        }
        else if (byesCount == 2)
        {
            byesPosition[j] = calUH(N);
        }
        else if (byesCount == 3)
        {
            byesPosition[j] = calUH(N) - 1;
        }
        byesCount++;
        if(byesCount > 4) { byesCount = 0; }
    }
    return byesPosition;
}
function calUH(N : number) : number {
    if(N%2==0) {
        return N/2;
    }
    else {
        return (N+1)/2;
    }
}

function calRoundOneMatches(N: number): number {
    return calByes(N) + ((N - calByes(N)) / 2);
}

function calFixtureInfo(totalTeams : team[]) : fixtureInfo {
    calByesBoolean(totalTeams);
    return {
        numOfMatches : totalTeams.length - 1,
        numOfRounds : calRounds(totalTeams.length),
        numOfMatchesRoundOne : calRoundOneMatches(totalTeams.length),
    };
}
export default calFixtureInfo;

