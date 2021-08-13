import React from "react";
import Header from "../../components/header/header2";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./Doctor.css";
import { Link } from "react-router-dom"

const Doctor = (props) => {
    return (
        <React.Fragment>
<<<<<<< HEAD
        <Header></Header>
        <div className="doctorContainer"><div className="doctorimg">
            <img src="https://lh3.googleusercontent.com/proxy/mEvO0jp863Ex7jsVot8LFrbqpKcVmJREub5iBsqUUzVf_H7Up20p9Wb2CpJ7kWAheIXIbW8c9_7qb9Dy1BjnAthrxMRXJblFeGVOEPgqLYSHAc8QJYJVahI7jVOVZUafgQ" alt="" />
=======
            <Header></Header>
            <div className="doctorContainer"><div className="doctorimg">
<<<<<<< HEAD
                <img src="https://img.gruporeforma.com/imagenes/960x640/6/63/5062370.jpg" alt="" />
=======
                <img src="https://i.ytimg.com/vi/esOcn5y86mM/hqdefault.jpg" alt="" />
>>>>>>> ad8bfd34c36ef38d15e64b99ed272c7dae02f9ba
>>>>>>> 57dedb305d0dd8414b0d0b2815e50fa016a96241
            </div>

            <div className="doctorname">
                <h3>Emilio Soto</h3>
            </div>

<<<<<<< HEAD
            <Link to="/patients">
                <button className="dr__Button">Patients</button>
            </Link>
=======
<<<<<<< HEAD
            <div className="doctorrating">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1005px-Star_empty.svg.png" alt="" />
=======
                <div className="doctorrating">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png" alt="" />
>>>>>>> ad8bfd34c36ef38d15e64b99ed272c7dae02f9ba

        </div>

        <div className="drPatientsButton">
            <Link to="/patients">
                <button>Patients</button>
            </Link>
        </div>

        <div className="dr"></div>
>>>>>>> 57dedb305d0dd8414b0d0b2815e50fa016a96241
    </div>
        <Footer></Footer>
        </React.Fragment >
    );
};

export default Doctor