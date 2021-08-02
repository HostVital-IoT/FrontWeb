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
                                <img src="https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png" alt="HV_logo" />
                                <p>HostVital</p>
                            </div>
                            <ul className="sm_icons">
                                <li className="Face"><FaFacebookF size="2.5em" /></li>
                                <li className="Twit"><AiOutlineTwitter size="3em" /></li>
                                <li className="Insta"><FaInstagram size="2.8em" /></li>
                            </ul>
                        </div>
                    </body>
                </html>
            </React.Fragment>
        )
    }

}


export default Footer