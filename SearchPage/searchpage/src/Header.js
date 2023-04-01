import "./header.css";

import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <div id="brand">
        Zomato App{" "}
        <Link to="/" className="btn btn-info">
          Home
        </Link>
      </div>

      <div id="social">
        <button className="btn btn-success">
          <span className="	glyphicon glyphicon-log-in"></span>LogIn
        </button>
        <button className="btn btn-danger">
          <span className="	glyphicon glyphicon-user"></span>SignUp
        </button>
      </div>
    </header>
  );
};

export default Header;