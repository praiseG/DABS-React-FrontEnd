import React, { Component } from 'react';
import './Appointments.css';
import PatientSelect from '../Patients/PatientSelect';
import DoctorSelect from '../Accounts/DoctorSelect';

export default class AppointmentForm  extends Component {
    render() {
        return(
        <form className="form">
            <div className="row">
            <div className="col-md-5"><PatientSelect patients={this.props.patients} /></div>
            <div className="col-md-2"></div>
            <div className="col-md-5"><DoctorSelect doctors={this.props.DoctorSelect} /></div>
            <br /><br />
            <div className="col-md-12"><textarea type="text" name="desc" placeholder="Description" className="form-control" rows="6"/></div>
            </div>
        </form>
        );
    }
};