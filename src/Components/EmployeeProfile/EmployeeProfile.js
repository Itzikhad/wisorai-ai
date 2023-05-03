import React, { useState } from 'react';
import './EmployeeProfile.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EmployeeProfile = ({ employee, onEditClick, onDeleteClick, onUpdateClick }) => {
  const [editing, setEditing] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUpdatedEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleUpdateClick = () => {
    setEditing(false);
    onUpdateClick(updatedEmployee.id, updatedEmployee);
  };

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

      {editing ? (
        <div className="employee-details">
          <div className="detail-row">
            <TextField name="email" label="Email" variant="standard" value={updatedEmployee?.email} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <TextField name="gender" label="Gender" variant="standard" value={updatedEmployee?.gender} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <TextField name="street_address" label="Address" variant="standard" value={updatedEmployee?.street_address} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <TextField name="city" label="City" variant="standard" value={updatedEmployee?.city} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <TextField name="manager_id" label="Manager ID" variant="standard" value={updatedEmployee?.manager_id} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <TextField name="bio" label="Bio" variant="standard" value={updatedEmployee?.bio} onChange={handleInputChange} />
          </div>
          <div className="detail-row">
            <Button variant="contained" onClick={handleUpdateClick} sx={{ margin: '5px', backgroundColor: '#757575' }}>
              Save
            </Button>
            <Button variant="contained" onClick={() => setEditing(false)} sx={{ margin: '5px', backgroundColor: '#757575' }}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
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
            )}
            <div className="employee-footer">
                <Button variant="contained"  onClick={() => {setEditing(true); onEditClick(employee, );}} sx={{margin: '5px', backgroundColor: '#757575'}}>
                    Edit
                </Button>
                <Button variant="contained"  onClick={() => onDeleteClick(employee)} sx={{margin: '5px', backgroundColor: '#757575'}}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default EmployeeProfile;
