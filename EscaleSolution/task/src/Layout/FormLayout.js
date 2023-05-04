import { Outlet, Link } from "react-router-dom";
const FormLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Outlet />
    </div>
  );
};
export default FormLayout;
