import React from "react";
import Header from "../../components/header/header2";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./Doctor.css";


const Doctor = (props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <div className="doctorContainer"><div className="doctorimg">
                <img src="https://img.gruporeforma.com/imagenes/960x640/6/63/5062370.jpg" alt="" />
            </div>

                <div className="doctorname">
                    <h3>Emilio Soto</h3>
                </div>

                <Link to="/patients">
                    <button className="dr__Button">Patients</button>
                </Link>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Doctor