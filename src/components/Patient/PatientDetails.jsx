import React from 'react';
import { Helmet } from 'react-helmet';
import api from '../../libs/flaskAPI';
import PatientUI from './PatientDetails_UI'

const Title = "Patient's Data"

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
                <Helmet>
                    <title>{Title}</title>
                </Helmet>
                <PatientUI patient={this.state.data}></PatientUI>
            </React.Fragment>
        )
    }

}

export default PatientDeatils;