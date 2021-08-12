import React from 'react'
import Patient from './Patient'


const PatientDetailsUI = (props) => {
	const patient = props.patient

	return (
		<React.Fragment>
			<div className="UI_Patient">
				<Patient
					profile_picture={patient.profile_picture || "https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png"}
					name={patient.name || "Name"}
					illness={patient.illness || "Illness"}
					status={patient.status || "Status"}
				></Patient>
			</div>
		</React.Fragment>
	)
}


export default PatientDetailsUI