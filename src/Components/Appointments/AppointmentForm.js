import React, { Component } from 'react';
import './Appointments.css';
import PatientSelect from '../Patients/PatientSelect';
import DoctorSelect from '../Accounts/DoctorSelect';

export default class AppointmentForm  extends Component {
    render() {
        return(
        <form className="form">
            <div className="form-row">
            <div className="col-md-6"><PatientSelect patients={this.props.patients} /></div>
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6"><DoctorSelect doctors={this.props.DoctorSelect} /></div>
            <br /><br />
            <div className="form-group col-md-12"><textarea type="text" name="desc" placeholder="Description" className="form-control" rows="2"/></div>
            <div className="form-group col-md-3"><button type="submit" className="btn btn-secondary">Submit</button></div>
            </div>
        </form>
        );
    }
};