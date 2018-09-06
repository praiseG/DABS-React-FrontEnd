import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import './Authentication.css';
import LoginForm from './LoginForm';


export default class Login extends Component {
    state = {
        errorMessage: undefined,
    }

    API_URL = "http://localhost:8003/api/auth/token/";
    
    handleAuthentication = (credentials) => {
        let resStatus = 0;
        fetch(this.API_URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => {
            resStatus = response.status;
            return response.json()
        })
        .then(parsedJSON => {
            console.log("response");
            console.log(resStatus);
            console.log(parsedJSON);
            switch (resStatus){
                case 200:
                    localStorage.setItem("token", parsedJSON.token);
                    localStorage.setItem("username", credentials.email);
                    this.setState({errorMessage: undefined});
                    break
                case 400:
                    this.setState({errorMessage: parsedJSON.non_field_errors[0]});
                    break;
                default:
                    this.setState({errorMessage: "Server Error. Please Try Again later"});
                    break;
            }
            console.log(this.state);
        })
        .catch(error => {
            console.error(error);
            this.setState({errorMessage: "Error Logging in. Please Try Again."});
        });
    }

    isAuthenticated = () => {
        const token = localStorage.getItem("token");
        return token && token.length > 30;
    }

    render(){
        let isLoggedin = this.isAuthenticated();
        return(
            <React.Fragment>
                {isLoggedin ? <Router><Redirect to={{pathname: '/dashboard'}} /></Router>: (
                    <React.Fragment>
                        <LoginForm authenticateAccount={this.handleAuthentication} loginError={this.state.errorMessage}/>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}
