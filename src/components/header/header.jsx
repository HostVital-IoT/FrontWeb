import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { Button, Modal, ModalBody } from 'reactstrap'


class Header extends React.Component {

    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

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
                        <p className="About">About Us</p>
                        <p className="Line">|</p>
                        <Link to="/login">
                            <p className="Log">Log In</p>
                        </Link>
                        <Button className="Sign_button" onClick={this.openModal}>Sign Up</Button>
                    </div>
                </div>

                <Modal classname="Sign_Modal" isOpen={this.state.isOpen}>
                    <ModalBody className="Sign_Modal_Body">

                        <h1>Sign Up</h1>
                        <p onClick={this.openModal}>X</p>

                        <form action="">
                            <input id="username" type="text" name="username" placeholder="username" className="s_username" />
                            <input id="password" type="password" name="password" placeholder="password" className="s_password" />
                            <input id="confirm_password" type="password" name="confirm_password" placeholder="confirm password" className="s_confirm_password" />
                            <input id="email" type="email" name="email" placeholder="email" className="s_email" />
                        </form>

                        <input id="signup" type="submit" value="Sign Up" className="sign_button" />

                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header