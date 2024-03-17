import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="company-name" to="/">
        <h3>Company Name</h3>
      </Link>
      <nav>
        <NavLink exact="true" activclassname="active" to="/">
          <label>Home</label>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activclassname="active" to="/edit_items">
          <label>Edit Items</label>
          <FontAwesomeIcon icon={faWrench} />
        </NavLink>
        <NavLink exact="true" activclassname="active" to="/contact">
          <label>Contact</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <div className="nav-bar-footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/daniel-hubmann-13585b268/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/dhubmann">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
