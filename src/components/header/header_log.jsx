import React from 'react'
import { Link } from 'react-router-dom'
import './header_log.css'


class Header_log extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header">
                    <div className="logo_header">
                        <Link to="/">
                            <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" alt="HV_logo" />
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