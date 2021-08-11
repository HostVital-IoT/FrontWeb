import React from 'react'
import './PatientForm.css'

class PatientForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Form">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group">
                            <label>
                                Profile Picture
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="profile_picture"
                                onChange={this.props.onChange}
                                value={this.props.formValues.profile_picture}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Header Image
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="header_img"
                                onChange={this.props.onChange}
                                value={this.props.formValues.header_img}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.props.onChange}
                                value={this.props.formValues.name}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Age
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                                onChange={this.props.onChange}
                                value={this.props.formValues.age}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Illness
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="illness"
                                onChange={this.props.onChange}
                                value={this.props.formValues.illness}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Status
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="status"
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