import React from "react"
import {Link} from "react-router-dom"
import "./styles/header.css"


class Header extends React.Component{
    render(){
        return(
        <React.Fragment>
            <div className="Header">
                <div className="HeaderLeft">
                <Link to="/">
                    <img src="https://cdn.discordapp.com/attachments/860293871089877023/860301308695281684/hostvital.png"></img>
                </Link>
                <h2 className="h2Header">HostVital</h2>
                </div>
                <div className="HeaderRight">
                    <a className="RightBorder" href="/">About Us</a>
                    <a href="/">Sign In</a>
                    <a class="active" href="/">Login</a>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Header;