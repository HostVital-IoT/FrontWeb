import React from "react"
import { Link } from "react-router-dom"
import "./header.css"


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header">
                    <div className="HeaderLeft">
                        <Link to="/">
                            <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" alt="HV"></img>
                            <h2 className="h2Header">HostVital</h2>
                        </Link>
                    </div>
                    <div className="HeaderRight">
                        <a className="RightBorder" href="/">About Us</a>
                        <a href="/signup">Sign Up</a>
                        <a class="active" href="/login">Sign In</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;