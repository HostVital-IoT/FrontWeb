import React from 'react'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { Link } from 'react-router-dom'
import { BsShieldLockFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import './Login.css'

const LogIn = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>LogIn</title>
                </head>
                <body>
                    <div className="Login">
                        <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" />

                        <form action="">
                            <input id="username" type="text" name="username" placeholder="Username" className="_username" />
                            <input id="password" type="password" name="password" placeholder="Password" className="_password" />
                            <Link to="/signup">
                                <p>Don't you have an account?</p>
                            </Link>
                            <input id="login" type="submit" value="Login" text="login" className="login_button" />
                        </form>

                        <div className="profile">
                            <FaUserCircle size="2em"></FaUserCircle>
                        </div>
                        <div className="lock">
                            <BsShieldLockFill size="2em"></BsShieldLockFill>
                        </div>

                    </div>
                </body>
            </html>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default LogIn