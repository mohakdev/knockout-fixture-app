export type team = {
    teamNo: number; //Unique for every team
    teamName: string;
};
export type match = {
    matchNo: number; //Unique for every match
    roundNo: number;
    teamsPlaying: team[];
    winner: team;
    loser: team;
    nextMatchNo: number;
};