import { useState, createContext } from 'react';
import { Grid } from '@mui/material';
import './App.css';
// import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import employeesJSON from './data/employees.json';
import EmployeeList from './Components/EmployeeList/EmployeeList';

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
  const [selectedEmployee, setSelectedEmployee]  = useState(null);
  // const [selectedEmployee, setSelectedEmployee]  = useState(employeeData);

  return (
    <UserContext.Provider value={{playlist, setPlaylist, selectedEmployee, setSelectedEmployee }}>
      <div className="App">
        <div direction='row' style={{ justifyContent: 'center', alignContent: 'center', padding: '2px', height: '30%', overflow: 'auto'}}>
          <EmployeeList employees={playlist}/>
        </div>
          <Grid item xs={8} sx={{ padding: "5px", margin: '5px', justifyContent: 'center' }}>
            <EmployeeProfile employee={selectedEmployee} />
          </Grid>
      </div>
    </UserContext.Provider>
  );
}

export default App;
