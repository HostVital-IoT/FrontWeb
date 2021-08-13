import React from "react";
import Header from "../../components/header/header2";
import Footer from "../../components/footer/footer";
import "./Doctor.css";
import { Link } from "react-router-dom"

const Doctor = (props) =>{
    return(
        <React.Fragment>
        <Header></Header>
        <div className="doctorContainer"><div className="doctorimg">
            <img src="https://lh3.googleusercontent.com/proxy/mEvO0jp863Ex7jsVot8LFrbqpKcVmJREub5iBsqUUzVf_H7Up20p9Wb2CpJ7kWAheIXIbW8c9_7qb9Dy1BjnAthrxMRXJblFeGVOEPgqLYSHAc8QJYJVahI7jVOVZUafgQ" alt="" />
            </div>

            <div className="doctorname">
                <h3>Dr Example</h3>
            </div>

            <div className="doctorrating">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1005px-Star_empty.svg.png" alt="" />

                </div>

                <div className="drPatientsButton">
                    <Link to="/patients">
                    <button>Patients</button>
                    </Link>
                </div>

                <div className="dr"></div>
            </div>
        <Footer></Footer>
        </React.Fragment>
    );
};

export default Doctor