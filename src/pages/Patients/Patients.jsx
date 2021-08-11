import React from 'react'
import PatientsList from '../../components/Patient/PatientList'
import api from '../../libs/flaskAPI'
import './Patients.css'

class Patients extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
        this.setFetchInterval()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.patients.list()
            data.reverse()
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
                <PatientsList patients={this.state.data}></PatientsList>
            </React.Fragment>
        )
    }
}

export default Patients