export type team = {
    teamNo: number; //Unique for every team
    teamName: string;
};
export type match = {
    matchNo: number; //Unique for every match
    roundNo: number;
    isBye: boolean;
    teamsPlaying: team[];
    winner: team;
    loser: team;
    nextMatchNo: number | null;
};
export type round = {
    roundNo: number;
    matches: match[];
};
export type fixtureInfo = {
    numOfMatches: number,
    numOfRounds: number,
    numOfUH: number,
    numOfMatchesRoundOne: number,
    byes: number[],
    //This is an array which contains byes position for eg, [1,4,5]
    //represents byes are placed at 1, 4, 5
} 