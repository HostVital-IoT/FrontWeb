import React from 'react'
import { Link } from 'react-router-dom'
import HV from '../../img/HV.png'
import './header_log.css'


class Header_log extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header">
                    <div className="logo_header">
                        <Link to="/">
                            <img src={HV} alt="HV_logo" />
                            <p>HostVital</p>
                        </Link>
                    </div>
                    <div className="links">
                        <p className="About_log">About Us</p>
                        <p className="Line_log">|</p>
                        <p className="Sign_log">Sign Up</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header_log