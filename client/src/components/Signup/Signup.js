
import React, { Component } from 'react';
import axios from 'axios';

import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./Signup.css";
import {Redirect} from "react-router-dom";

class Signup extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleInputChange = this.handleInputChange.bind(this);
    
  
    this.state = {
  
      data: [],
      fname: '',
      lname: '',
      email: '',
      password: '',
      showLogin: false,
      showresult: false,
      intervalIsSet: false
    };
}

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 6 && this.state.fname.length>3 && this.state.lname.length>3 ;
  }
  componentDidMount() {
  
    
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  handleInputChange = e => {
    
   const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onClickLogin(e){
    e.preventDefault();
    this.setState({showLogin: !this.state.showLogin })
  }
  onSubmit = (e) => {
    e.preventDefault();
    

    const { fname, lname, email, password } = this.state;

    axios.post('/api/putData', {  fname, lname, email, password})
      .then((result) => {
        console.log(result);
        //access the results here....
        // this.getDataFromDb();
        this.setState({
      
            fname: "",
            lname:"",
            email: "",
            password: ""
          });
          
      });
  }
  
  render() {
    
    return (
    
      <div className="Login">
        <form>
          <FormGroup controlId="formBasicText">
              <ControlLabel>first name: </ControlLabel>
              <FormControl
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
          <FormGroup controlId="lname">
              <ControlLabel>last name: </ControlLabel>
              <FormControl
                  type="text"
                  name="lname"
                  placeholder={<img src="faces.jpg" alt="icon"/>}
                  value={this.state.lname}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
                
        
          <FormGroup controlId="formControlsEmail" bsSize="large">
            <ControlLabel>email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsPassword" bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
            autoFocus
            type="password"
            name="password"
              value={this.state.password}
              onChange={this.handleInputChange}    
            />
          </FormGroup>
          <Button
            // block
            bsSize="large"
            //  disabled={!this.validateForm()}
            type="submit"
            onClick={this.onSubmit}
          >
            submit
          </Button><br/>
          <p>if you have an account  <a  type="submit" href="" onClick={this.onClickLogin.bind(this)}>login
          {this.state.showLogin ? <Redirect to={{
            pathname: '/Login'
          }} />: null}</a></p>
        </form>
        
        </div>
    );
  }
}
export default Signup;