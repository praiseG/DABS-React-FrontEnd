import React, { Component } from 'react'
import './Authentication.css';
import LoginForm from './LoginForm'
import Header from '../Layouts/Header';

export default class Login extends Component {
    state = {
        errorMessage: undefined,
        token: undefined
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
                    this.setState({token: parsedJSON.token, errorMessage: undefined});
                    break
                case 400:
                    this.setState({errorMessage: parsedJSON.non_field_errors[0], token: undefined});
                    break;
                default:
                    this.setState({errorMessage: "Server Error. Please Try Again later", token: undefined});
                    break;
            }
            console.log(this.state);
        })
        .catch(error => {
            console.error(error);
            this.setState({errorMessage: "Error Logging in. Please Try Again.", token: undefined});
        });
        // console.log("" + typeof(resStatus));
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                <LoginForm authenticateAccount={this.handleAuthentication} loginError={this.state.errorMessage}/>
            </React.Fragment>
        );
    }
}
