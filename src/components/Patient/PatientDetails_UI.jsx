import React from 'react'
import Patient from './Patient'


const PatientDetailsUI = (props) => {
	const patient = props.patient

	const handleBlood = (color) => {

		if (patient.age >= 8 && 17 >= patient.age) {

			if (patient.blood_pressure >= 80 && 100 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 101 && 119 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (120 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 18 && 25 >= patient.age) {

			if (patient.blood_pressure >= 56 && 73 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 74 && 81 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (82 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 26 && 35 >= patient.age) {

			if (patient.blood_pressure >= 55 && 74 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 75 && 81 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (82 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 36 && 45 >= patient.age) {

			if (patient.blood_pressure >= 57 && 75 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 76 && 82 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (83 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 46 && 55 >= patient.age) {

			if (patient.blood_pressure >= 58 && 76 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 77 && 83 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (84 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 56 && 65 >= patient.age) {

			if (patient.blood_pressure >= 57 && 75 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 76 && 81 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (82 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		} else if (patient.age >= 66) {

			if (patient.blood_pressure >= 56 && 73 >= patient.blood_pressure) {
				color = "#2DD25B"
				return color
			} else if (patient.blood_pressure >= 74 && 79 >= patient.blood_pressure) {
				color = "#E8E14B"
				return color
			} else if (80 >= patient.blood_pressure) {
				color = "#CE2727"
				return color
			}

		}
	}

	const handleOxygen = (color) => {
		if (patient.oxygen_level <= 100 && 95 <= patient.oxygen_level) {
			color = "#2DD25B"
			return color
		} else if (patient.oxygen_level <= 94 && 91 <= patient.oxygen_level) {
			color = "#E8E14B"
			return color
		} else if (patient.oxygen_level <= 90 && 80 <= patient.oxygen_level) {
			color = "#CE2727"
			return color
		}

	}

	const handleSugar = (color) => {
		if (patient.sugar_level >= 70 && 100 >= patient.sugar_level) {
			color = "#2DD25B"
			return color
		} else if (patient.sugar_level >= 101 && 126 >= patient.sugar_level) {
			color = "#E8E14B"
			return color
		} else if (patient.sugar_level >= 127) {
			color = "#CE2727"
			return color
		}
	}

	return (
		<React.Fragment>
			<div className="UI_Patient">
				<Patient
					profile_picture={patient.profile_picture || "https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png"}
					name={patient.name || "Name"}
					illness={patient.illness || "Illness"}
					blood_pressure={patient.blood_pressure}
					oxygen_level={patient.oxygen_level}
					sugar_level={patient.sugar_level}
					blood={handleBlood(patient)}
					oxygen={handleOxygen(patient)}
					sugar={handleSugar(patient.sugar_level)}
				></Patient>
			</div>
		</React.Fragment>
	)
}


export default PatientDetailsUI