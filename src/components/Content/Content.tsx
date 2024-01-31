import { Outlet } from "react-router-dom";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default Content;
