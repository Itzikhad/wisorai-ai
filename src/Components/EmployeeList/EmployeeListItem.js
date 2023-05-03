import React from 'react';
import './EmployeeListItem.css';

function EmployeeListItem(props) {
  const { employee, onItemClick } = props;

  return (
    <div className="employee" onClick={() => onItemClick(employee)}>
      <div className="employee-avatar">
        <img src={employee.profile_pic} alt={employee.first_name} />
      </div>
      <div className="employee-details">
        <div className="employee-name">{`${employee.first_name} ${employee.last_name}`}</div>
        <div className="employee-email">{employee.email}</div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
