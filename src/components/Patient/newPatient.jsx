import React from 'react';
import './newPatient.css';

class newPatient extends React.Component {

    handleColor = (color) => {
        if (this.props.status === 'Good') {
            color = "#2DD25B"
            return color
        } else if (this.props.status === 'Stable') {
            color = "#CAD452"
            return color
        } else if (this.props.status === 'Critical') {
            color = "#CE2727"
            return color
        } else {
            color = '#898989'
            return color
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="n_Badge">
                    <div className="n_Badge__header">
                        <img src={this.props.header_img} alt="header_img" />
                    </div>
                    <div className="n_Badge__userInfo">
                        <div className="n_Badge__userImage">
                            <img src={this.props.profile_picture} alt="profile_picture" />
                        </div>
                        <div className="n_Badge__username">
                            <h4>{this.props.name}</h4>
                            <p>{this.props.illness}</p>
                        </div>
                    </div>
                    <div className="n_Badge__info">
                        <h4>{this.props.status}</h4>
                        <p>STATUS</p>
                        <div className="np_bs" style={{ backgroundColor: this.handleColor() }}></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default newPatient;