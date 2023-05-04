import axios from "axios";

export function requestGetEmployee() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/api/v1/employees/",
  });
}
