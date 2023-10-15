import { Component } from "react";
import "./Layout.css"
import Footer from "../footer/Footer";
import { Link, Outlet } from "react-router-dom";

class Layout extends Component {
    state = {  } 
    render() { 
        return <>
     <nav className="navbar navbar-expand-lg  pt-4 pb-4 fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>

<Outlet />

<Footer />

        </>;
    }
}
 
export default Layout;