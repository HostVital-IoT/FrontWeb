import React from 'react'
import Patient from './Patient'


const PatientDetailsUI = (props) => {
	const patient = props.patient

	return (
		<React.Fragment>
			<div className="UI_Patient">
				<Patient
					header_img={patient.header_img || "https://st.depositphotos.com/1522993/4737/v/600/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg"}
					profile_picture={patient.profile_picture || "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"}
					name={patient.name || "Name"}
					illness={patient.illness || "Illness"}
					status={patient.status || "Status"}
				></Patient>
			</div>
		</React.Fragment>
	)
}


export default PatientDetailsUI