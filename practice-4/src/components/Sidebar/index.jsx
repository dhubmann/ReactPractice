import "./index.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="company-name" to="/">
        <h3>Company Name</h3>
      </Link>
      <nav>
        <NavLink exact="true" activclassname="active" to="/">
          <label>Home</label>
          <FontAwesomeIcon icon={faHome} color="black" />
        </NavLink>
        <NavLink exact="true" activclassname="active" to="/edit_items">
          <label>Edit Items</label>
          <FontAwesomeIcon icon={faWrench} color="black" />
        </NavLink>
        <NavLink exact="true" activclassname="active" to="/">
          <label>Contact</label>
          <FontAwesomeIcon icon={faEnvelope} color="black" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
