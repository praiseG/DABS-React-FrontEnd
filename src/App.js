import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './Components/Layouts/Header';
import Dashboard from './Components/Layouts/Dashboard';
import Login from './Components/Authentication/Login';
import Logout from './Components/Authentication/Logout';


class App extends Component {
 state = {
      patients: [],
      year: "2018",
      username: undefined
  }
  
  setLoggedInUser = (username) => {
    username && this.setState({username: username});
  } 

  isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && token.length > 30;
  }

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
    let isLoggedin = this.isAuthenticated();

    return (
      <Router>
        <React.Fragment>
          <Header user={this.state.username}/>
          {/* <Login setLoggedInUser={this.setLoggedInUser}/> */}
          {!isLoggedin && <Redirect to={{pathname: "/login"}} />}
          <Route exact path="/" render={props => <Dashboard {...props} year={this.state.year} />} />
          <Route path="/login" exact strict render={props => <Login {...props} setLoggedInUser={this.setLoggedInUser}/>} />
          <Route path="/logout" exact component={Logout} />
          {/* <Route path="/patients" exact component={Logout} /> */}
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
