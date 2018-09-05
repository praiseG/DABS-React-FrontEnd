import React, { Component } from 'react';
import PatientItem from './PatientItem';

export default class Patients extends Component {
    deletePatient = (name) => {
        this.props.onDelete(name);
    }

    render() {
        let patientItems;
        if(this.props.patients){
            patientItems = this.props.patients.map(patient => {
                console.log(patient)
                return(<PatientItem key={patient.name} patient={patient} onDelete={this.deletePatient} />);
            });
        }
        return(
            <div>
                {patientItems}
            </div>
        );
    }
}

// Patients.propTypes = {
//     patients: React.propTypes.array,
//     onDelete: React.propTypes.func
// }
