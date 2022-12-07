import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <Link className="link" to="/">
            <h6>首頁</h6>
          </Link>
          <Link className="link" to="/?cat=javascript">
            <h6>Javascript</h6>
          </Link>
          <Link className="link" to="/?cat=protocol">
            <h6>網路協議</h6>
          </Link>
          <Link className="link" to="/?cat=database">
            <h6>資料庫</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
