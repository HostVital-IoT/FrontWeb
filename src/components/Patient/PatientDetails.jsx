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
        this.setFetchInterval()
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

    setFetchInterval() {
        this.interval = setInterval(this.fetchData, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <React.Fragment>
                <title>Patient Details</title>
                <PatientUI patient={this.state.data}></PatientUI>
            </React.Fragment>
        )
    }

}

export default PatientDeatils;