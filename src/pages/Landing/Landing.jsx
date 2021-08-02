import React from 'react'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import './Landing.css'

const Landing = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    <div className="Landing">

                    </div>
                </body>
            </html>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Landing