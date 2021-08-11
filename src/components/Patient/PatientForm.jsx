import React from 'react'
import './PatientForm.css'

class PatientForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Form">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="profile_picture"
                                placeholder="Profile Picture"
                                onChange={this.props.onChange}
                                value={this.props.formValues.profile_picture}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="header_img"
                                placeholder="Header Image"
                                onChange={this.props.onChange}
                                value={this.props.formValues.header_img}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={this.props.onChange}
                                value={this.props.formValues.name}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                                placeholder="Age"
                                onChange={this.props.onChange}
                                value={this.props.formValues.age}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="illness"
                                placeholder="Illness"
                                onChange={this.props.onChange}
                                value={this.props.formValues.illness}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="status"
                                placeholder="Status"
                                onChange={this.props.onChange}
                                value={this.props.formValues.status}
                            />
                        </div>
                        <button type="submit" className="Submit__button">{this.props.buttonText}</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default PatientForm;