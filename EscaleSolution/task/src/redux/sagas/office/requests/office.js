import axios from "axios";

export function requestGetOffice() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/api/v1/offices",
  });
}
