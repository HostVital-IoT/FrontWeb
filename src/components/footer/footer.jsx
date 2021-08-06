import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import './footer.css';



class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </head>
                    <body>
                        <div className="Footer">
                            <div className="logo_footer">

                            </div>
                            <ul className="sm_icons">
                                <li className="Face"><FaFacebookF size="4.3vh" /></li>
                                <li className="Twit"><AiOutlineTwitter size="5.4vh" /></li>
                                <li className="Insta"><FaInstagram size="4.8vh" /></li>
                            </ul>
                        </div>
                    </body>
                </html>
            </React.Fragment>
        )
    }

}


export default Footer