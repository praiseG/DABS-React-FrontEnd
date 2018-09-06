import React, { Component } from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './Layouts/Header';
import Login from './Authentication/Login';
import Dashboard from './Layouts/Dashboard';


class App extends Component {
 state = {
      patients: [],
      year: "2018",
      username: undefined
  }
  
  // getloggedInUser = () => {
  //   let username = localStorage.getItem("username");
  //   username && this.setState({username: username});
  // } 

  getPatients = () => {
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
    // this.getloggedInUser();
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
        <React.Fragment>
        <Header user={this.state.username}/>
        <Login />
        <Router>
          <React.Fragment>
            <Route path="/" exact strict Component={Dashboard} />
            <Route path="/dashboard" exact strict Component={Dashboard} />
            <Route path="/login" exact strict Component={Login} />
          </React.Fragment>
        </Router>
        </React.Fragment>
    );
  }
}

export default App;
