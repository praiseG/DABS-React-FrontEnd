import React, { Component } from 'react';
import './Layouts.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img src={logo} alt="" href="" className="navbar-brand nav-logo" /> 
                <button className="navbar-toggler" type="button" data-target="#navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="" className="nav-link"><strong>DABS</strong></a>
                        </li>
                        <li className="nav-item dropdown pull-right">
                            <a className="nav-link dropdown-toggle" href="" id="navdrop" role="button" data-toggle="dropdown" data-hover="dropdown">User</a>
                            <div className="dropdown-menu" aria-labelledby="navdrop">
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link  to="/logout" className="dropdown-item">Logout</Link>
                            </div>
                            
                        </li>
                      
                    </ul>
                </div>
            </nav>
        );
    }
}
