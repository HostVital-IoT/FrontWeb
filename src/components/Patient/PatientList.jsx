import React from "react"
import { Link } from "react-router-dom"
import "./PatientsList.css"

class PatientsListItem extends React.Component {

	handleColor = (color) => {
		if (this.props.patient.status === 'Good') {
			color = "#2DD25B"
			return color
		} else if (this.props.patient.status === 'Stable') {
			color = "#CAD452"
			return color
		} else {
			color = "#CE2727"
			return color
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="PatientsListItem mt-5">
					<div className="col-5">
						<div className="Item__profilePicture">
							<img src={this.props.patient.profile_picture} alt="profile_picture" />
						</div>
						<div className="Item__background">
							<img src={this.props.patient.header_img} alt="header_background" />
						</div>
					</div>
					<div className="p_data">
						<div className="row">
							<h4 className="text-center mt-3">
								{this.props.patient.name}
							</h4>
							<p className="pl_status">
								{this.props.patient.status}
							</p>
							<p className="pl_illness">
								{this.props.patient.illness}
							</p>
							<div className="_bs" style={{ backgroundColor: this.handleColor() }}></div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const useSearchPatients = (patients) => {
	const [query, setQuery] = React.useState("")
	const [filteredPatients, setfilteredPatients] = React.useState(patients)

	React.useMemo(() => {
		const result = patients && patients.filter((patient) => {
			return `${patient.name}`.toLowerCase().includes(query.toLowerCase())
		})

		setfilteredPatients(result)
	}, [patients, query])

	return { query, setQuery, filteredPatients }
}

const PatientsList = (props) => {

	const patients = props.patients

	const { query, setQuery, filteredPatients } = useSearchPatients(patients)

	if (undefined !== filteredPatients && filteredPatients.lenght) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Patients</label>
					<input
						type="text"
						className="form-control SB"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
					/>
					<h3>No patients were found.</h3>
					<Link className="btn btn-success" to="/new">Create Patient</Link>
				</div>
			</div>
		)
	}

	return (
		<React.Fragment>
			<div className="PatientsList__container">
				<div className="PatientsList__search-bar">
					<div className="PatientsList__search-bar__row">
						<div className="form-group mt-2">
							<label>Filter Patients</label>
							<input
								type="text"
								className="form-control"
								value={query}
								onChange={(e) => {
									setQuery(e.target.value)
								}}
							/>
						</div>
						<Link to="/new/patient" style={{ textDecoration: 'none' }} className="pl_Link">
							<button className="np_Button">New Patient</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="container List mb-5">
				<div className="list-unstyled">
					{filteredPatients && filteredPatients.map((patient) => {
						return (
							<div key={patient._id}>
								<Link style={{ textDecoration: 'none' }} to={`/${patient._id}`}>
									<PatientsListItem patient={patient}></PatientsListItem>
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default PatientsList;