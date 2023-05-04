import axios from "axios";

export function requestGetEmployee(id) {
  console.log(id);
  return axios({
    method: "GET",
    url: "http://localhost:5000/api/v1/employee/" + id,
  });
}

export function requestCreateEmployee(formData) {
  let res = fetch("http://localhost:5000/api/v1/employee/", {
    method: "POST",
    body: formData,
  });

  console.log(res.json());
  return res.json();
}

export function requestUpdateEmployee({ employee, id }) {
  console.log("requestUpdateEmployee", employee, id);
  return axios({
    method: "PUT",
    url: "http://localhost:5000/api/v1/employee/" + id,
    data: employee,
  });
}

export function requestDeleteEmployee(id) {
  console.log("requestUpdateEmployee", id);
  return axios({
    method: "delete",
    url: "http://localhost:5000/api/v1/employee/" + id,
  });
}
