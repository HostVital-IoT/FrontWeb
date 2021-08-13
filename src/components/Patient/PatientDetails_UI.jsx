import React from 'react'
import Patient from './Patient'


const PatientDetailsUI = (props) => {
	const patient = props.patient

	const handleBlood = (color_b) => {

		if (patient.age >= 8 && 17 >= patient.age) {

			if (patient.blood_pressure >= 80 && 100 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 101 && 119 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 120 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 18 && 25 >= patient.age) {

			if (patient.blood_pressure >= 56 && 73 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 74 && 81 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 82 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 26 && 35 >= patient.age) {

			if (patient.blood_pressure >= 55 && 74 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 75 && 81 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 82 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 36 && 45 >= patient.age) {

			if (patient.blood_pressure >= 57 && 75 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 76 && 82 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 83 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 46 && 55 >= patient.age) {

			if (patient.blood_pressure >= 58 && 76 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 77 && 83 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 84 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 56 && 65 >= patient.age) {

			if (patient.blood_pressure >= 57 && 75 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 76 && 81 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 82 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		} else if (patient.age >= 66) {

			if (patient.blood_pressure >= 56 && 73 >= patient.blood_pressure) {
				color_b = "#2DD25B"
				return color_b
			} else if (patient.blood_pressure >= 74 && 79 >= patient.blood_pressure) {
				color_b = "#E8E14B"
				return color_b
			} else if (patient.blood_pressure >= 80 && 280 >= patient.blood_pressure) {
				color_b = "#CE2727"
				return color_b
			}

		}
	}

	const handleOxygen = (color_o) => {

		if (patient.oxygen_level >= 95 && 100 >= patient.oxygen_level) {
			color_o = "#2DD25B"
			return color_o
		} else if (patient.oxygen_level >= 91 && 94 >= patient.oxygen_level) {
			color_o = "#E8E14B"
			return color_o
		} else if (patient.oxygen_level >= 86 && 90 >= patient.oxygen_level) {
			color_o = "#E57B18"
			return color_o
		} else if (patient.oxygen_level >= 12 && 85 >= patient.oxygen_level) {
			color_o = "#CE2727"
			return color_o
		}

	}

	const handleSugar = (color_s) => {

		if (patient.sugar_level >= 70 && 100 >= patient.sugar_level) {
			color_s = "#2DD25B"
			return color_s
		} else if (patient.sugar_level >= 101 && 126 >= patient.sugar_level) {
			color_s = "#E8E14B"
			return color_s
		} else if (patient.sugar_level >= 127) {
			color_s = "#CE2727"
			return color_s
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
					oxygen={handleOxygen(patient.oxygen_level)}
					sugar={handleSugar(patient.sugar_level)}
				></Patient>
			</div>
		</React.Fragment>
	)
}


export default PatientDetailsUI