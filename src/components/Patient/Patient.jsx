import React from 'react';
import './Patient.css';

class Patient extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Badge">
                    <div className="Badge__header">
                        <img src={this.props.header_img} alt="header_img" />
                    </div>
                    <div className="Badge__userInfo">
                        <div className="Badge__userImage">
                            <img src={this.props.profile_picture} alt="profile_picture" />
                        </div>
                        <div className="Badge__username">
                            <h4>{this.props.name}</h4>
                            <p>{this.props.illness}</p>
                        </div>
                    </div>
                    <div className="Badge__info">
                        <h4>{this.props.status}</h4>
                        <p>Status</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Patient;