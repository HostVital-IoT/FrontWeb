import React from 'react'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import './Landing.css'


const Landing = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <html lang="en" className="Landing_page">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:title" content="Landing"></meta>
                </head>
                <body classname="Landing_body">
                    <div className="Landing">

                    </div>
                </body>
            </html>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Landing