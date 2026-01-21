import axios from "axios";

export const trackUser = (handle) =>
  axios.post("http://localhost:5000/api/user/track", { handle });