import React from 'react'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { Link } from 'react-router-dom'
import { BsShieldLockFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import './Login.css'

const Title = "Sign In"

const LogIn = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <Header></Header>
            <div className="Login">
                <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" alt="HV" />

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

            <Footer></Footer>
        </React.Fragment>
    )
}

export default LogIn