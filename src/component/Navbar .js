import React, { useEffect } from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
        <div className="container-fluid">

        <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          
          <div className="collapse navbar-collapse mx-1" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0">
              <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="/about">{props.about}</a>
              </li>
            </ul>
            <form className="d-flex">

              <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={() => { props.handleMode(); props.toggleStyle() }} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Modename}</label>
              </div>
            </form>
          </div>

        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Set title',
  home: 'Home',
  about: 'about'
}