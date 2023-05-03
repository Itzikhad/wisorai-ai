import { useContext } from "react";
import EmployeeListItem from "./EmployeeListItem";
import "./EmployeeList.css";
import { UserContext } from "../../App";

function EmployeeList({ employees }) {
  const context = useContext(UserContext);

  const handleItemClick = (employee) => {
    console.log("clicked")
    context.setSelectedEmployee(employee);
  };

  const getSubordinatesCount = (employeeId) => {
    return context.allEmployees.filter((employ) => employ.manager_id === employeeId).length;
  };

  return (
    <div className="employee-list-container">
      <h2 className="list-header">Employees List</h2>
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeListItem
            key={employee.id}
            employee={employee}
            onItemClick={handleItemClick}
            numSubordinates={context.selectedEmployee?.id === employee.id ? getSubordinatesCount(employee.id) : null}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
