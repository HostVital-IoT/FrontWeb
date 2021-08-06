import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './NewPatient.css'

const NewPatient = (props) => {
        return(
            <React.Fragment>
                <Header></Header>
                <div className="newPatientForm">
                    <form action="">
                        <p>Name</p>
                        <input id="name" placeholder="John Smith" type="text" className="nameForm"/>
                        <p>Age</p>
                        <input id="age" placeholder="18" type="text" className="ageForm"/>
                        <p>Illness</p>
                        <input id="illness" placeholder="Flu" type="text" className="illnessForm"/>
                        <p>Profile Picture</p>
                        <input type="file" name="" id="" />
                        <br />
                        <button type="submit">Register</button>
                    </form>
                </div>

                <Footer></Footer>
            </React.Fragment>
        )
    }


export default NewPatient;