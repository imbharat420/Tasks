import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Create = () => {
  const dispatch = useDispatch();
  const offices = useSelector((state) => state.office?.offices);

  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
    designation: "",
    officeDetail: "",
  });

  const [profilePic, setProfilePic] = useState("");

  const setInputFile = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const inputHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const createEmployee = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("age", employee.age);
    formData.append("email", employee.email);
    formData.append("number", employee.number);
    formData.append("designation", employee.designation);
    formData.append("officeDetail", employee.officeDetail);
    formData.append("profilePic", profilePic);

    console.log("createEmployee");
    dispatch({
      type: "CREATE_EMPLOYEE",
      payload: formData,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_OFFICE" });
  }, []);
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
          Create Employee
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profilePic"
            >
              Profile Picture
            </label>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                name="profilePic"
                id="profilePic"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                "
                onChange={setInputFile}
              />
            </label>
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
              className="border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-100 block w-full p-2.5 outline-none"
              onInput={inputHandler}
            >
              {offices &&
                offices.map((office, index) => {
                  return (
                    <option key={index} value={office.id}>
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
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
