import React from "react"
export const Header = () => {
    return (<div>
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo" href="index.html"><img src="../images/logo.png" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="../images/s-logo.png" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="mdi mdi-menu"></span>
                </button>

                <ul className="navbar-nav navbar-nav-right">

                    <li className="nav-item nav-logout d-none d-lg-block">
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-power"></i>
                        </a>
                    </li>

                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
    </div>)

}
export default Header