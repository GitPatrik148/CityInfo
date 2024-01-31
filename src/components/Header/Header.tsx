import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

import { UserContext } from "../../context/UserContext";
import { getPages } from "../../utils";

import "./Header.scss";
import Login from "../Login/Login";

const Header: FC = () => {
  const { isLoggedIn, logOut } = useContext(UserContext);
  const location = useLocation();
  console.log(`Navigated to: ${location.pathname}`);

  const pageTitle = "City Info Page";
  const pages = getPages();

  return (
    <div className="header">
      <div className="navbar">
        <p className="site-title">{pageTitle}</p>
        <div>
          {pages.map((page) => {
            return (
              <Link className="page-link" key={page.path} to={page.path}>
                {page.title}
              </Link>
            );
          })}
        </div>

        {!isLoggedIn && <Login />}
        {isLoggedIn && (
          <Button onClick={logOut} variant="outlined" color="inherit">
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
