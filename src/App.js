import { useState, createContext } from 'react';
import { Grid } from '@mui/material';
import './App.css';
// import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import employeesJSON from './data/employees.json';
import EmployeeList from './Components/EmployeeList/EmployeeList';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#90caf9',
//     },
//     secondary: {
//       main: '#f48fb1',
//     },
//     background: {
//       default: '#424242',
//       paper: '#616161',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#f5f5f5',
//     },
//   },
// });

const employeeData = {
  "id": 15196,
  "first_name": "Lambert",
  "last_name": "Varey",
  "email": "lvareyr@springer.com",
  "username": "lvareyr",
  "profile_pic": "https://i.pravatar.cc/250?u=15196",
  "gender": "Male",
  "street_address": "518 Lawn Street",
  "city": "Dolní Dvořiště",
  "manager_id": 80585,
  "bio": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl."
};


/* 
=== App ===
  main component.
  serves as a container for all UI components and a divider
  fetching the last updated employees list local JSON. holds it as a state and in context at the start of the function.

    == behaviour ==
      * holds a list of employees
      * holds a presentor for detailed employee screen

*/

export const UserContext = createContext();

function App() {
  const [playlist, setPlaylist] = useState(employeesJSON);
  const [allEmployees, setAllEmployees] = useState(employeesJSON);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  // const [selectedEmployee, setSelectedEmployee]  = useState(employeeData);

  // const [employees, setEmployees] = useState(data);

  const handleEditEmployee = (employeeId, updatedEmployee) => {
    console.log("edit clicked employeeId", employeeId)
    console.log("edit clicked updatedEmployee", updatedEmployee)
    // const updatedEmployees = playlist.map((employee) =>
    //   employee.id === employeeId ? updatedEmployee : employee
    // );
    // setPlaylist(updatedEmployees);
    // setSelectedEmployee(updatedEmployee);
  };
  const handleUpdatedEmployee = (employeeId, updatedEmployee) => {
    console.log("edit clicked employeeId", employeeId)
    console.log("edit clicked updatedEmployee", updatedEmployee)
    const updatedEmployees = playlist.map((employ) =>
      employ.id === employeeId ? updatedEmployee : employ
    );
    setPlaylist(updatedEmployees);
    setSelectedEmployee(updatedEmployee);
  };

  const handleDeleteEmployee = (employee) => {
    // console.log("delete clicked, employeeId", employee)
    const updatedEmployees = playlist.filter(
      (e) => e.id !== employee.id
    );
    // console.log("updatedEmployees", updatedEmployees)
    setPlaylist(updatedEmployees);
    setSelectedEmployee(null);
  };

  return (
    <UserContext.Provider value={{ playlist, setPlaylist, selectedEmployee, setSelectedEmployee, allEmployees }}>
      <div className="App">
        <div direction='row' style={{ justifyContent: 'center', alignContent: 'center', padding: '2px', height: '30%', overflow: 'auto' }}>
          <EmployeeList employees={playlist} />
        </div>
        <Grid item xs={8} sx={{ padding: "5px", margin: '5px', justifyContent: 'center' }}>
          <EmployeeProfile employee={selectedEmployee} onEditClick={handleEditEmployee} onDeleteClick={handleDeleteEmployee} onUpdateClick={handleUpdatedEmployee} />
        </Grid>
      </div>
    </UserContext.Provider>
  );
}

export default App;
