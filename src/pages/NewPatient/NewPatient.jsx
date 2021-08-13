import React from 'react'
import api from '../../libs/flaskAPI'
import Patient from '../../components/Patient/newPatient'
import Header from '../../components/header/header2'
import PatientForm from '../../components/Patient/PatientForm'
import { Helmet } from 'react-helmet'
import './NewPatient.css'

const Title = "New Patient"

class NewPatient extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            header_img: "https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg",
            profile_picture: "https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png",
            name: "",
            age: "",
            illness: "",
            status: "",
            blood_pressure: 0,
            sugar_level: 0,
            oxygen_level: 0
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.setState({ loading: false, error: null })

        try {
            await api.patients.create(this.state.form)
            this.setState({ loading: false, error: null })
            this.props.history.push('/patients')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <React.Fragment >
                <Helmet>
                    <title>{Title}</title>
                </Helmet>
                <Header></Header>
                <div className="newPatientForm">

                    <div className="Badge__inForm">
                        <Patient
                            header_img={this.state.form.header_img || "https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg"}
                            profile_picture={this.state.form.profile_picture || "https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png"}
                            name={this.state.form.name || "NAME"}
                            illness={this.state.form.illness || "ILLNESS"}
                            status={this.state.form.status || "STATUS"}
                        ></Patient>
                    </div>
                    <div className="Form__inForm">
                        <h2>Sign Up New Patient</h2>
                        <PatientForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            buttonText="Save"
                        ></PatientForm>
                    </div>

                </div>
            </React.Fragment >
        )
    }
}

export default NewPatient;