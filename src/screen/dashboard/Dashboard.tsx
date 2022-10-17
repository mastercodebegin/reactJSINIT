import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginService } from '../../services/Loginservice'
import { CategorieService } from '../../services/CategorieService'
import SideBar from '../sidebar/SideBar'
import Header from '../header/Header'
// import './dashboard.css'
import chart from '../../assets/images/chart.png'
import graph from '../../assets/images/graph.png'



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
            <div className='p-3'>
            <Header /> 
    <div className="container-fluid mt-3">
    <div className="row ">
             <SideBar />
            <div className="col-md-9 p-4 whiteBg">
                <div className="bannerBg mb-4">
                    <div className="title">Lets Manage the Orders</div>
                </div>
                <div className="row ">

                    <div className="col-md-4 mb-4">
                        <div className="greenBox">

                            <div className="row ">
                                <div className="col-md-3"></div>
                                <div className="col-md-9 text-center">
                                    <div className="boxTitle pt-4">
                                        Total Order
                                    </div>
                                    <div className="amount">100</div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="yellowBox">

                            <div className="row ">
                                <div className="col-md-3"></div>
                                <div className="col-md-9 text-center">
                                    <div className="boxTitle pt-4">
                                        Approved
                                    </div>
                                    <div className="amount">60</div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="darkgreenBox">

                            <div className="row ">
                                <div className="col-md-3"></div>
                                <div className="col-md-9 text-center">
                                    <div className="boxTitle pt-4">
                                        Completed
                                    </div>
                                    <div className="amount">40</div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="yellowBox4">

                            <div className="row ">
                                <div className="col-md-3"></div>
                                <div className="col-md-9 text-center">
                                    <div className="boxTitle pt-4">
                                        Pending
                                    </div>
                                    <div className="amount">40</div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="darkgreenBox5">

                            <div className="row ">
                                <div className="col-md-3"></div>
                                <div className="col-md-9 text-center">
                                    <div className="boxTitle pt-4">
                                        Revenue
                                    </div>
                                    <div className="amount">200$</div>
                                </div>
                            </div>



                        </div>
                    </div>


                    <div className="col-md-4 mb-4">

                        <div className="row ">

                            <div className="col-md-3">
                                <div className="branch">

                                </div>
                            </div>
                            <div className="col-md-9 pl-0">
                                <div className="row ">

                                    <div className="col-12 pl-7">
                                        <div className="lightgreenBox">

                                            <div className="row ">
                                                <div className="col-md-5"></div>
                                                <div className="col-md-7">
                                                    <div className="boxTitle2 pt-3 ">
                                                        Online<br />
                                                        Revenue
                                                    </div>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 pl-7 mt-3">
                                        <div className="darkbrownBox">

                                            <div className="row ">
                                                <div className="col-md-5"></div>
                                                <div className="col-md-7">
                                                    <div className="boxTitle2 pt-3 ">
                                                        Cash
                                                        <br />
                                                        Revenue
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-6">
                        <div className="pageTitle">
                            Revenue Pie Chart
                            <div className="text-center mt-4">
                                <img src={graph} className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={chart} className="img-fluid" />
                    </div>

                </div>



            </div>
            </div>
            </div>
            </div>
            <footer className="footer mt-2">
    <div className="container-fluid">
        <div className="row disF">
<div className="col-5">
    Copyright © Pedi & Nails Ltd, All Rights Reserved
</div>
<div className="col-7">
    <div className="footerLink">
        <ul>
            <li>
                <a href="#">Terms & Conditions</a>
            </li>
            |
            <li>
                <a href="#">Privacy</a>
            </li>
            |
            <li>
                <a href="#">Account Activity</a>
            </li>
            |
            <li>
                <a href="#">Report An Issue</a>
            </li>
           
        </ul>
    </div>

  
</div>
</div>
    </div>
            </footer>
        </div>

    )
}
