import React from 'react'
import api from '../../libs/flaskAPI'
import Patient from '../../components/Patient/Patient'
import Header from '../../components/header/header2'
import Footer from '../../components/footer/footer'
import PatientForm from '../../components/Patient/PatientForm'
import './NewPatient.css'

class NewPatient extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            header_img: "",
            profile_picture: "",
            name: "",
            age: "",
            illness: "",
            status: ""
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
            this.props.history.push('/new/patient')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <React.Fragment >
                <Header></Header>
                <div className="newPatientForm">
                    <h2>Sign Up New Patient</h2>
                    <div className="Badge__inForm">
                        <Patient
                            header_img={this.state.form.header_img || "Header Image"}
                            profile_picture={this.state.form.profile_picture || "Profile Picture"}
                            name={this.state.form.name || "Name"}
                            illness={this.state.form.illness || "Illness"}
                            status={this.state.form.status || "Status"}
                        ></Patient>
                    </div>
                    <div className="Form__inForm">
                        <PatientForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            buttonText="Save"
                        ></PatientForm>
                    </div>

                </div>
                <Footer></Footer>
            </React.Fragment >
        )
    }
}

export default NewPatient;