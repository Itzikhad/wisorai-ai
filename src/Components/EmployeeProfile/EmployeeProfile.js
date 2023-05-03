import React from 'react';
import './EmployeeProfile.css';

const EmployeeProfile = ({ employee }) => {
    if (!employee) {
        return <div className="no-data">No data available</div>;
    }

    const { id, first_name, last_name, email, username, profile_pic, gender, street_address, city, manager_id, bio } = employee;

    return (
        <div className="employee-profile">
            <div className="employee-header">
                <img src={profile_pic} alt={first_name} />
                <h2>{`${first_name} ${last_name}`}</h2>
                <p>&nbsp;&nbsp;{'(' + username + ') '}</p>
            </div>

            <div className="employee-details">
                <div className="detail-row">
                    <label>ID:</label>
                    <span>{id}</span>
                </div>
                <div className="detail-row">
                    <label>Email:</label>
                    <span>{email}</span>
                </div>
                <div className="detail-row">
                    <label>Gender:</label>
                    <span>{gender}</span>
                </div>
                <div className="detail-row">
                    <label>Address:</label>
                    <span>{`${street_address}, ${city}`}</span>
                </div>
                <div className="detail-row">
                    <label>Manager ID:</label>
                    <span>{manager_id}</span>
                </div>
                <div className="detail-row">
                    <label>Bio:</label>
                    <p>{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;
