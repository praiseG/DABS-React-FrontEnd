import React, { Component } from 'react';


export default class PatientItem extends Component {
    deleteProject(name){
        this.props.onDelete(name);
    }

    render() {
        return(
            <li>
                {this.props.patient.name} - {this.props.patient.email}<a onClick={this.deleteProject.bind(this, this.props.patient.name)}>X</a>
            </li>
        );
    }
}
