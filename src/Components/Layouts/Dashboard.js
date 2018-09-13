import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Accounts from '../Accounts/Accounts';
import Patients from '../Patients/Patients';
import Appointments from '../Appointments/Appointments';
import Navigation from './Navigation';
import Footer from './Footer';

export default class Dashboard extends Component {
    render(){
        return(
            <React.Fragment>
                <Navigation />
                <div className="container-fluid mt-c-20">
                    <Route path={this.props.match.url} exact strict component={Appointments} />
                    <Route path={`${this.props.match.url}appointments`} exact strict component={Appointments}/>
                    <Route path={`${this.props.match.path}accounts`} exact strict component={Accounts} />
                    <Route path={`${this.props.match.url}patients`} exact strict component={Patients} />
                </div>      
                <Footer year={this.props.year}/>
            </React.Fragment>
        );
    }
}