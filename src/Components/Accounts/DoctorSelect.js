import React from 'react';

const DoctorSelect = props => {
    let doctorItem = <option value="">Assign Doctor</option>
    props.doctors && (doctorItem += props.doctors.map(doctor => {
        return <option value={doctor.id}>{doctor.name}</option>
    }))

    return(
        <select className="form-control" name="doctor_id">
            {doctorItem}
        </select>
    )
}

export default DoctorSelect;