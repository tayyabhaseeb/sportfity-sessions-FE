import axios from "axios";

const sportifyApi = axios.create({
  baseURL: "https://sportify-sessions.onrender.com/api",
});

export function getMatches() {
  return sportifyApi.get("/matches").then(({ data: matches }) => {
    return matches;
  });
}

export function getMatchById(match_id) {
  return sportifyApi.get(`/matches/${match_id}`).then(({ data: match }) => {
    return match;
  });
}

export function getMatchStatsById(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/stats`)
    .then(({ data: matchStats }) => {
      return matchStats;
    });
}

export function getPlayerGoalsById(match_id) {
  return sportifyApi
    .get(`/matches/${match_id}/player_goals`)
    .then(({ data: matchPlayerGoals }) => {
      console.log(matchPlayerGoals);
      return matchPlayerGoals;
    });
}

export const getLeagues = () => {
  return sportifyApi.get(`/leagues`).then(({ data: leagues }) => {
    return leagues;
  });
};

export const getLeaguesById = (leagueId) => {
  return sportifyApi.get(`/leagues/${leagueId}`).then(({ data: league }) => {
    return league;
  });
};
