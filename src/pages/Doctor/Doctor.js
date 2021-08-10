import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./Doctor.css";


const Doctor = (props) =>{
    return(
        <React.Fragment>
        <Header></Header>
        <div className="doctorContainer"><div className="doctorimg">
            <img src="https://symbiosis.ae/images/doctors/Dr_Ateeque1.png" alt="" />
            </div>

            <div className="doctorname">
                <h3>Dr Example</h3>
            </div>

            <div className="doctorrating">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />

                </div>

                <div className="drPatientsButton">
                    <button>Patients</button>
                </div>

                <div className="dr"></div>
            </div>
        <Footer></Footer>
        </React.Fragment>
    );
};

export default Doctor