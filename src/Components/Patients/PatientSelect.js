import React from 'react';

const PatientSelect = props => {
    let patientItems = <option value="">Select Patient</option>
    
    props.patients && (patientItems += props.patients.map(patient => {
        return <option value={patient.id} name="patient_id">{patient.name}</option>
    }))

    return(
        <select className="form-control">
            {patientItems}
        </select>
    );
};

export default PatientSelect;