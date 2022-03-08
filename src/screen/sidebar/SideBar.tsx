import React from "react"
import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="nav-profile-image">
                                <img src="../images/face1.jpg" alt="profile" />
                                <span className="login-status online"></span>

                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                <span className="font-weight-bold mb-2">prashant Grey. H</span>
                                <span className="text-secondary text-small">Project Manager</span>
                            </div>
                            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <span className="menu-title">Dashboard</span>
                            <i className=" fa fa-dashboard menu-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/usermanagement" >
                            <span className="menu-title">User Managment</span>
                            <i className="fa fa-users menu-icon"></i>
                        </Link>



                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="product.html">
                            <span className="menu-title">Product</span>
                            <i className="fa fa-cube menu-icon"></i>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    )

}

export default SideBar