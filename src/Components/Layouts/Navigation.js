import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Layouts.css'


export default class Nav extends Component {
    render() {
        return(
            <aside className="main_sidebar">
                <ul>
                    <li></li>
                    <li className="active"><i className="fa fa-list"></i><Link to="/appointments" exact>Appointments</Link></li>
                    <li><i className="fa fa-address-book"></i><Link to="/Patients" exact>Patients</Link></li>
                    <li ><i className="fa fa-user"></i><Link to="/Accounts" exact>Accounts</Link></li>
                </ul>
            </aside>
        );
    }
}
