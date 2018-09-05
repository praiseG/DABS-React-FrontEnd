import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

export default class AddPatient extends Component {
    state = {
        newPatient: {},
    }
    
    handleSubmit = (e) => {
            this.refs.name.value &&  
            this.refs.email.value &&
            this.refs.mobile.value &&
            this.setState({newPatient: {
                    name: this.refs.name.value,
                    email: this.refs.email.value,
                    mobile: this.refs.email.value
                }}, function(){
                    console.log(this.state)
                    this.props.addPatient(this.state.newPatient);
                    // console.log(this.refs.name.value);
            });
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <h2> Add New Patient </h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Name" ref="name" />
                    <input type="text" className="form-control" placeholder="Email" ref="email" />
                    <input type="text" className="form-control" placeholder="Mobile" ref="mobile" />
                    <button type="submit" className="btn btn-primary btn-md">Submit</button>
                </form> 
            </div>
        );
    }
}

