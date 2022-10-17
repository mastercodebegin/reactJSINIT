import React from "react"
import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
<>

<div className="col-md-3 pl-0">
    <div className="collapse leftMenu pl-4 pr-4 pt-2 min-vh-100" id="sidebar">
        <ul className="nav flex-column flex-nowrap">
            <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fa fa-dashboard"></i> Dashboard
            </a>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">
                <i className="fa fa-book active" aria-hidden="true"></i> Booking Syatem
                
                
                </a>
                <div className="collapse subMenu" id="submenu1" aria-expanded="false">
                    <ul className="flex-column pl-5 nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Booking Dashboard
                            </a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  Booking Callander</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Booking Appointments</a>
                                </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  Employee Management</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  Services Management</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">   User Managerment</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  Email Notification</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  SMS Notification</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">  Payments
                            
                            
                            </a>
                        </li>
                         {/* <li className="nav-item">
                            <a className="nav-link collapsed py-1" href="#submenu1sub1" data-toggle="collapse"
                                data-target="#submenu1sub1">Customers</a>
                            <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                <ul className="flex-column nav pl-4">
                                    <li className="nav-item">
                                        <a className="nav-link p-1" href="#">
                                            <i className="fa fa-fw fa-clock-o"></i> Daily
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-1" href="#">
                                            <i className="fa fa-fw fa-dashboard"></i> Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-1" href="#">
                                            <i className="fa fa-fw fa-bar-chart"></i> Charts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link p-1" href="#">
                                            <i className="fa fa-fw fa-compass"></i> Areas
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>  */}
                    </ul>
                </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">
                <i className="fa fa-book" aria-hidden="true"></i> Loyalty Points
                </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">
                <i className="fa fa-map-marker" aria-hidden="true"></i> Location Management
                
            </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">
                <i className="fa fa-window-restore" aria-hidden="true"></i> Banner Management
            
                </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">
                <i className="fa fa-bar-chart" aria-hidden="true"></i> Sales Report
            
                </a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">
                <i className="fa fa-cogs" aria-hidden="true"></i> Settings
            
                </a>
            </li>
           
          
           
        </ul>
    </div>
</div>
</>
    )

}

export default SideBar