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
                        <div className="blood__Pressure">
                            <h4>{this.props.blood_pressure}</h4>
                            <p>Blood Pressure</p>
                            <div className="pd_bs_b" style={{ backgroundColor: this.props.blood }}></div>
                        </div>
                        <div className="oxygen__Level">
                            <h4>{this.props.oxygen_level}</h4>
                            <p>Oxygen Level</p>
                            <div className="pd_bs_o" style={{ backgroundColor: this.props.oxygen }}></div>
                        </div>
                        <div className="sugar__Level">
                            <h4>{this.props.sugar_level}</h4>
                            <p>Sugar Level</p>
                            <div className="pd_bs_s" style={{ backgroundColor: this.props.sugar }}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Patient;