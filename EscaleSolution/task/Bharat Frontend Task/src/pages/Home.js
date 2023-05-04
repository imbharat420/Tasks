import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterSelect from "../components/FilterSelect";
import EmployeeCard from "../components/Card";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [offices, setOffices] = useState([]);

  const dispatch = useDispatch();
  const getEmployees = useSelector((state) => state.employee?.employees);
  const getOffice = useSelector((state) => state.office);

  useEffect(() => {
    dispatch({ type: "GET_EMPLOYEES" });
    dispatch({ type: "GET_OFFICES" });
    console.log("getOffice", getOffice);
    console.log("employees", employees);
  }, []);

  useEffect(() => {
    if (getEmployees.employees !== undefined) {
      setEmployees(getEmployees.employees);
    }
  }, [getEmployees]);

  useEffect(() => {
    if (getOffice.offices !== undefined) {
      setOffices(getOffice?.offices.map((office) => office.name));
    }
  }, [getOffice]);

  const deleteEmployee = (id) => {
    console.log("delete", id);
    console.log("employees", employees);
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
    if (newSelectedOptions.length === 0) {
      setEmployees(getEmployees.employees);
    } else {
      setEmployees(
        getEmployees.employees.filter((employee) =>
          newSelectedOptions.includes(employee.officeDetail?.name)
        )
      );
    }
  };

  return (
    <div className="">
      <div className="bg-gradient-to-r from-red-300 to-yellow-200 flex justify-between items-center py-5 px-10 rounded-b-lg">
        <FilterSelect
          options={offices || []}
          selectedValues={selectedOptions}
          onChange={handleSelectChange}
        />
      </div>

      <div className="fixed right-10 bottom-10">
        <Link to="/employee">
          <button className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <svg viewBox="0 0 20 20" className="w-6 h-6 inline-block">
              <path
                fill="#FFFFFF"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="from-red-300 to-yellow-200 flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {employees.map((employee) => (
            <EmployeeCard employee={employee} deleteEmployee={deleteEmployee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
