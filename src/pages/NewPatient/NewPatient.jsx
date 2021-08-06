import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './NewPatient.css'

const NewPatient = (props) => {
        return(
            <React.Fragment>
                <Header></Header>
                <div className="newPatientForm">
                    <h2>Sign Up New Patient</h2>
                    <form action="">
                        <p className="nameHolder">Name</p>
                        <input id="name" placeholder="John Smith" type="text" className="nameForm"/>
                        <p className="nameHolder">Age</p>
                        <input id="age" placeholder="18" type="text" className="ageForm"/>
                        <p className="nameHolder">Illness</p>
                        <input id="illness" placeholder="Flu" type="text" className="illnessForm"/>
                        <p className="nameHolder">Profile Picture</p>
                        <input type="file" name="" id="" className="imageForm"/>
                        <br />
                        <button className="registerButton" type="submit">Register</button>
                    </form>
                </div>

                <Footer></Footer>
            </React.Fragment>
        )
    }


export default NewPatient;