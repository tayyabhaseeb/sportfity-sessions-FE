import axios from "axios";

const sportifyApi = axios.create({
  baseURL: "https://sportify-sessions.onrender.com/api",
});

export function getMatches() {
  return sportifyApi.get("/matches").then(({ data: matches }) => {
    return matches;
  });
}
