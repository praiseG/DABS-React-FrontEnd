import React, { Component } from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';

import './App.css';
import Accounts from './Accounts/Accounts';
import Patients from './Patients/Patients';
import AddPaint from './Patients/AddPatient';
import Appointments from './Appointments/Appointments';
import Header from './Layouts/Header';
import Navigation from './Layouts/Navigation';
import Footer from './Layouts/Footer';
import Login from './Authentication/Login';


class App extends Component {
 state = {
      patients: [],
      year: "2018"
  }
  

  getPatients(){
    this.setState({
      patients: [
        {
          name: "Nema Stella",
          email: "nems@gmail.com",
          mobile: "0789876564"
        },
        {
          name: "Jacob Stevens",
          email: "jsteves@gmail.com",
          mobile: "0767890987"
        },
        {
          name: "Dan Samuels",
          email: "sams.d@gmail.com",
          mobile: "0779012035"
        },
        {
          name: "Konga Kigu",
          email: "kkig@gmail.com",
          mobile: "0792810093"
        },
      ],
    });
  }

  getAccounts(){

  }

  componentWillMount(){
    this.getPatients();
    this.getAccounts();
  }

  componentDidMount(){
    this.getAccounts();
  }
  handleAddPatient = (newPatient) => {
    let patients = this.state.patients;
    patients.push(newPatient);
    this.setState({patients: patients});
  }

  handleDeletePatient = (name) => {
    let patients = this.state.patients;
    let index = patients.findIndex(x => x.name === name);
    patients.splice(index, 1);
    this.setState({patients:patients});

  }
  render() {
    return (
      <Router>
        <React.Fragment>
        <Route path="/" exact strict Component={Login} />
        <Route path="/appointments" exact strict Component={Appointments} />
        <Route path="/accounts" exact strict Component={Accounts} />
        <Route path="/patients" exact strict Component={Patients} />
          {/* <Header /> */}
          {/* <Navigation /> */}
          {/* <div className="container"> */}
            {/* <Accounts /> */}
            {/* <AddPaint addPatient={this.handleAddPatient}/> */}
            {/* <Patients patients={this.state.patients} onDelete={this.handleDeletePatient} /> */}
            {/* <Appointments /> */}
          {/* </div> */}
          {/* <Footer year={this.state.year}/> */}
          <Login />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
