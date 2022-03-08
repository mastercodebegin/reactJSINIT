// @ts-nocheck 
import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import login from '../../../public/css/login.css'
import SpinnerHelper from '../../helpers/SpinnerHelper'
import { commonService } from '../../services/CommonService'
import { LoginService } from '../../services/Loginservice'
import logo from '../dashboard/logo.png'
import './login.css'
export default function Login() {
    const navigate=useNavigate()
    const [email, setEmail] = useState('admin@test.com')
    const [password, setPassword] = useState('Fama@123')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        setIsLoading(true)
        setEmail(e.target.value)
        setPassword(e.target.value)

        const user = { email: email, password: password }
        const data = await LoginService.login(user)        
        if (data?.data.statusCode == 200) {
            localStorage.setItem("token", data?.data.message);
            <Navigate to='/dashboard' replace={true}/>
            navigate('/dashboard')
            setIsLoading(false)
        }else {setIsLoading(false)}
    }
    return (
        <div className="login-page">
            {/* <SpinnerHelper isLoading={isLoading} /> */}
            <div className="login-bg">

                <div className="login-box">
                    <div className="logo">
                        <img src={logo} className="" />
                    </div>
                    <div className="heading m-b-15">Login</div>

                    <div className="login-form">
                        <div className="floating-label login-div">
                            <input className="login-input" type="text"
                                placeholder=" " onChange={e => setEmail(e.target.value)} />

                            <label>Email</label>
                        </div>

                        <div className="floating-label login-div">
                            <input className="login-input" type="text" placeholder=" " onChange={e => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>

                        {/* <!-- <p className="text-right">
                <a href="#">Forgot your password?</a>
            </p> --> */}

                        <div className="login-btn">
                            <button className="signin" tabIndex="0" onClick={handleSubmit}>Sign In</button>
                        </div>


                    </div>



                </div>

            </div>


        </div>


    )
}
