import React from 'react';
import api from '../../libs/flaskAPI';
import PatientUI from './PatientDetails_UI'

class PatientDeatils extends React.Component {

    state = {
        loading: false,
        error: null,
        data: {},
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.patients.read(this.props.match.params.patientId)
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <PatientUI patient={this.state.data}></PatientUI>
        )
    }

}

export default PatientDeatils;