import React, { Component } from 'react';
import './Authentication.css';

export default class LoginForm extends Component {
    state = {
        credentials: {}  
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.refs.email.value && this.refs.password.value && this.setState({
            credentials: {
                email: this.refs.email.value,
                password: this.refs.password.value
            }}, function(){
                console.log(this.state);
                this.props.authenticateAccount(this.state.credentials);
            });   
    }

    render() {
        return(
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div className="box">
                            <div className="shape1"></div>
                            <div className="shape2"></div>
                            <div className="shape3"></div>
                            <div className="shape4"></div>
                            <div className="shape5"></div>
                            <div className="shape6"></div>
                            <div className="shape7"></div>
                            <div className="float">
                                
                                <form className="form" onSubmit={this.handleSubmit}>
                                <p className="dabs-errors">{this.props.loginError}</p>
                                    <div className="form-group">
                                        <input type="text" name="email" ref="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" ref="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-dabs btn-md" value="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}