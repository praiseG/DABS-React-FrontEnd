import React, { Component } from 'react';
import './Layouts.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img src={logo} alt="" href="" className="navbar-brand nav-logo" /> 
                <button className="navbar-toggler" type="button" data-target="#navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text text-white">
                        <strong>DABS</strong>
                    </span>
                    <ul className="navbar-nav ml-auto">
                        <li>&nbsp;</li>
                        {this.props.user && (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="" id="navdrop" role="button" data-toggle="dropdown" data-hover="dropdown">{this.props.user}</a>
                            <div className="dropdown-menu" aria-labelledby="navdrop">
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link  to="/logout" className="dropdown-item">Logout</Link>
                            </div>
                        </li>)}                     
                    </ul>
                </div>
            </nav>
        );
    }
}
