import React from 'react'
import Header from '../../components/header/header_log.jsx'
import Footer from '../../components/footer/footer.jsx'
import './Login.css'

const SignUp = (props) => {
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
                        <h1>LOGIN</h1>
                        <h3>Please enter your username and password</h3>
                        <form action="">
                            <input id="username" type="text" name="username" placeholder="Username" className="_username" />
                            <input id="password" type="password" name="password" placeholder="Password" className="_password" />
                            <p>Forgot your password?</p>
                            <input id="login" type="submit" value="Login" text="login" className="login_button" />
                        </form>
                    </div>
                </body>
            </html>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default SignUp