import React from 'react'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { BsShieldLockFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { RiKeyFill } from 'react-icons/ri'
import { Helmet } from 'react-helmet'
import './Signup.css'

const Title = "Sign Up"

const SignUp = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{Title}</title>
            </Helmet>
            <Header></Header>
            <div className="Sign_up">
                <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" alt="HV" />
                <form action="">
                    <input id="username" type="text" name="username" placeholder="Username" className="p_username" />
                    <input id="password" type="password" name="password" placeholder="Password" className="p_password" />
                    <input id="confirm_password" type="password" name="confirm password" placeholder="Confirm password" className="p_confirm_password" />
                    <input id="email" type="email" name="email" placeholder="Email" className="p_email" />

                    <input id="login" type="submit" value="Sign Up" text="login" className="sign_up_button" />
                </form>

                <ul className="sm_icons">
                    <li className="p_User"><FaUserCircle size="2em"></FaUserCircle></li>
                    <li className="p_Lock"><BsShieldLockFill size="2em"></BsShieldLockFill></li>
                    <li className="p_Key"><RiKeyFill size="2em"></RiKeyFill></li>
                    <li className="p_Mail"><IoIosMail size="2em"></IoIosMail></li>
                </ul>



            </div>

            <Footer></Footer>
        </React.Fragment>
    )
}

export default SignUp