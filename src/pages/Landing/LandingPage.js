import React from "react"
import "./LandingPage.css"
import Beat from "../../images/beat.gif"
import Temp from "../../images/temp.png"
import Mobile from "../../images/mobile.png"
import googleps from "../../images/google-play-badge.png"
import apps from "../../images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"

const LandingPage = (props) => {
    return(
    <React.Fragment>
        <div className="Landing">
            <div className="Main_content">
            <div className="h1__title">{"The future for our health is here"} </div>
            <div className="mainbox">
                <div className="Sensors">
                    <h2 className="h2">Check your Vitals in Real Time</h2>
                    <img src= {Beat}></img>
                </div>
                <div className="Temp">
                    <h2 className="h2">Body temperature sensor</h2>
                    <img src={Temp}></img>
                </div>
            </div>

            <div className="phonebox">
                <h2 className="h2">Check your patient from anywhere you are on your phone</h2>
                <img src={Mobile}></img>
            </div>

            <div className="StoresBox">
                <h2 className="h2">Available on major platforms for free!</h2>
                <img className="Googleone" src={googleps}></img>
                <img className="Apple" src={apps}></img>
            </div>
        </div>
        </div>
    </React.Fragment>
    );
}

export default LandingPage;