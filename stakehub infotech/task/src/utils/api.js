import axios from "axios";

const api = axios.create({
  baseURL: "https://rich-puce-rooster-hat.cyclic.app/api",
});

export default api;
