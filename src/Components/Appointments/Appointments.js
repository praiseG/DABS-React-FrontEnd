import React, { Component } from 'react'
import AppointmentForm from './AppointmentForm';

class Appointments extends Component {
    state = {
        patients: undefined,
        doctors: undefined
    }

    get_patients = () => {}
    get_doctors = () => {}

    componentWillMount(){
        this.get_patients()
        this.get_doctors()
    }
    render() {
        return(
            <div>
                <button type="button" className="btn btn-info float-right"><i className="fa fa-plus"></i>&nbsp;New Appointment</button>
                <br /><br />
                <AppointmentForm doctors={this.state.doctors} patients={this.state.patients} />
            </div>
        );
    }
}

export default Appointments;