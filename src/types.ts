export type team = {
    teamNo: number; //Unique for every team
    teamName: string;
    isBye: boolean;
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
    numOfMatchesRoundOne: number,
} 