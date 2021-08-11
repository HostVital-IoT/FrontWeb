import React from "react"
import { Link } from "react-router-dom"
import Button from '../Buttons/Button';
import "./PatientsList.css"

class PatientsListItem extends React.Component {
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
					<div className="col-7 my-5">
						<div className="row">
							<h4 className="text-center mt-3">
								{this.props.patient.name}
							</h4>
							<p className="text-center">{this.props.patient.status}</p>
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

	if (undefined !==filteredPatients && filteredPatients.lenght) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Patients</label>
					<input
						type="text"
						className="form-control"
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
						<div className="col">
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
						</div>
						<div className="col">
							<div className="Patients__container">
								<div className="Patients__button">
									<Button
										theme={"Button-light"}
										contentText={"New Patient"}
										link={"/new"}
									></Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container List mb-5">
				<div className="list-unstyled">
					{filteredPatients && filteredPatients.map((patient) => {
						return (
							<div key={patient._id}>
								<Link className="text-reset text-decoration-none" to={`/${patient._id}`}>
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