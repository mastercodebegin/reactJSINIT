import React from "react"
import header_top from '../../assets/images/header_top.png'
import logo from '../../assets/images/logo.jpg'
import user from '../../assets/images/user.png'
import search from '../../assets/images/search.png'
import header_bottom from '../../assets/images/header_bottom.png'

export const Header = () => {
    return (
        <>
         <div className="headerTop">
    <div className="container-fluid">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-md-11 pr-0 text-right">
<img src={header_top} className="img-fluid"/>
                </div>
                </div>
                </div>
    </div>
<header className="header">
    <div className="container-fluid">
        <div className="row disF">
            <div className="col-md-3 pl-0">
                <img src={logo}/>
            </div>
            <div className="col-md-9 pr-0">

<div className="disFend">
<div className="searchBox">
    <input className="search" type="text" placeholder="Search"/>
    <img src={search}  className="searchIcon"/>
    <span className="notification">
        <i className="fa fa-bell"></i>
        <span className="notGreen"></span>
    </span>
</div>

<span className="userName">Test, Admin</span>

<div className="dropdown plr-15">
    <a className="btn dropdown-toggle profile" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        <img src={user} />
    </a>

    <div className="dropdown-menu">
        <a className="dropdown-item" href="profile.html"><i className="fa fa-edit"></i> Profile Edit</a>
        <a className="dropdown-item" href="#"><i className="fa fa-sign-in"></i> logout</a>
    </div>
</div>

</div>


          <div className="header_bottom text-right">
            <img src={header_bottom}  className="img-fluid"/>
            </div>      
            </div>
        </div>
</div>
</header>
        </>
    )

}
export default Header