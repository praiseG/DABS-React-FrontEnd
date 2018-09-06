import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Accounts from '../Accounts/Accounts';
import Patients from '../Patients/Patients';
import Appointments from '../Appointments/Appointments';
import Login from '../Authentication/Login';
import Navigation from './Navigation';
import Footer from './Footer';

export default class Dashboard extends Component {
    render(){
        return(
            <React.Fragment>
                <Navigation />
                <div className="container">
                    <Router>
                        <Route path="/login" exact strict Component={Login} />
                        <Route path="/logout" exact strict Component={Dashboard} />
                        <Route path="/appointments" exact strict Component={Appointments} />
                        <Route path="/accounts" exact strict Component={Accounts} />
                        <Route path="/patients" exact strict Component={Patients} />
                    </Router>
                </div>
                <Footer year={this.state.year}/>
            </React.Fragment>
        );
    }
}