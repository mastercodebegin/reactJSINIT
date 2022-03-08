import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginService } from '../../services/Loginservice'
import { CategorieService } from '../../services/CategorieService'
import SideBar from '../sidebar/SideBar'
import Header from '../header/Header'
// import './dashboard.css'


export default function Dashboard() {
    const navigate = useNavigate()
    const [categorie, setCategorie] = useState('admin@test.com')
    const [isLoading, setIsLoading] = useState(false)
    let jwtToken = ''
    useEffect(() => {
        jwtToken = localStorage.getItem("token") as string;


    })
    const handleSubmit = async (e: any) => {
        setIsLoading(true)
        setCategorie(e.target.value)
        const data = { name: categorie }
        console.log(categorie);

        const response = await CategorieService.addCategorie(data, jwtToken)
        // console.log(response);  
    }
    const getAllCategories = async () => {
        const response = await CategorieService.getAllCategorie()

    }

    return (
        <div>
            <div className="container-scroller">

                <Header />

                <div className="container-fluid page-body-wrapper">

                    <SideBar />

                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="page-header">
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                        <i className="mdi mdi-home"></i>
                                    </span> Dashboard--------
                                </h3>

                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-4 stretch-card transparent">
                                    <div className="card card-tale">
                                        <div className="card-body">
                                            <p className="mb-4">Today’s Bookings</p>
                                            <p className="fs-30 mb-2">4006</p>
                                            <p>10.00% (30 days)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4 stretch-card transparent">
                                    <div className="card card-dark-blue">
                                        <div className="card-body">
                                            <p className="mb-4">Total Bookings</p>
                                            <p className="fs-30 mb-2">61344</p>
                                            <p>22.00% (30 days)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4  stretch-card transparent">
                                    <div className="card card-light-blue">
                                        <div className="card-body">
                                            <p className="mb-4">Number of Meetings</p>
                                            <p className="fs-30 mb-2">34040</p>
                                            <p>2.00% (30 days)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-4  stretch-card transparent">
                                    <div className="card card-light-danger">
                                        <div className="card-body">
                                            <p className="mb-4">Number of Clients</p>
                                            <p className="fs-30 mb-2">47033</p>
                                            <p>0.22% (30 days)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <footer className="footer">
                            <div className="container-fluid clearfix">
                                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates </a> from Bootstrapdash.com</span>
                            </div>
                        </footer>

                    </div>

                </div>

            </div>
        </div>

    )
}
