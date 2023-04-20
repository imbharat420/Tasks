import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const offices = useSelector((state) => state.office?.offices);
  const currEmployee = useSelector((state) => state.employee?.employee);

  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
    designation: "",
    officeDetail: "",
  });

  const inputHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const createEmployee = (e) => {
    e.preventDefault();
    console.log("employee", employee, id);
    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: { employee, id },
    });

    navigate("/");
  };
  useEffect(() => {
    dispatch({
      type: "GET_EMPLOYEE",
      payload: id,
    });

    dispatch({ type: "GET_OFFICE" });
  }, []);

  useEffect(() => {
    setEmployee({
      ...currEmployee,
      officeDetail: currEmployee?.officeDetail?._id,
    });
    console.log("currEmployee", currEmployee);
  }, [currEmployee]);

  return (
    <div className=" w-full sm:w-3/6">
      <div className="">
        <div className="back absolute">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path
                fill="#2c2c2c"
                d="M231.4,258.7c30.7-30.7,61.4-61.4,92.1-92.1c26.8-26.8-14.9-68.2-41.8-41.3c-37.6,37.6-75.2,75.2-112.8,112.8c-11.4,11.4-11,30.3,0.2,41.5c37.6,37.6,75.2,75.2,112.8,112.8c26.8,26.8,68.2-14.9,41.3-41.8C292.6,319.9,262,289.3,231.4,258.7z"
              ></path>
            </svg>
          </Link>
        </div>

        <h2 className="text-3xl  text-center font-bold my-2">
          Update Employee
        </h2>
      </div>
      <div className="w-full mt-2">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={createEmployee}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onInput={inputHandler}
              value={employee?.name ?? ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              name="age"
              type="number"
              placeholder="Age"
              onInput={inputHandler}
              value={employee?.age ?? ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onInput={inputHandler}
              value={employee?.email || ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="designation"
              name="designation"
              type="text"
              placeholder="Designation"
              onInput={inputHandler}
              value={employee?.designation || ""}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="officeDetail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select an option
            </label>
            <select
              id="officeDetail"
              name="officeDetail"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-100 block w-full p-2.5 outline-none"
              onInput={inputHandler}
              value={employee?.officeDetail || ""}
            >
              {offices &&
                offices.map((office) => {
                  return (
                    <option
                      value={office.id}
                      selected={office.id === employee?.officeDetail}
                    >
                      {office.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              name="number"
              type="tel"
              placeholder="Phone Number"
              onInput={inputHandler}
              value={employee?.number || ""}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
