import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <div class="container">
          <Link class="navbar-brand" to="/Online-Portfolio">
            <b>Stuart Boey</b>
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Online-Portfolio" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Online-Portfolio">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Online-Portfolio/projects" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Online-Portfolio/projects">
                  Projects
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Online-Portfolio/profile" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Online-Portfolio/profile">
                  Profile
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Online-Portfolio/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Online-Portfolio/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);