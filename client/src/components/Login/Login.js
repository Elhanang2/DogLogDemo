import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { Redirect} from "react-router-dom";
//import  Signup from "../Signup";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSignup: false,
      volunteerrating: false,
      login: [],
      email: "",
      password: "",
      firstname: "",
      errmessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginOnClick = this.loginOnClick.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  loginOnClick(e){
    e.preventDefault();
    const {email, password } =this.state;
    axios.get("/api/getVolunteerLogin", {params: {email: email,
      password: password
    }}).then(res =>{ 
      console.log("first name : "+ res.data.firstname)
      if((res.data.email === this.state.email) &&
        (res.data.password === this.state.password)){
        this.setState({volunteerrating:!this.state.volunteerrating, errmessage: this.state.errmessage, firstname: res.data.firstname})
      }else{this.setState({errmessage: !this.state.errmessage})}
    }
    ).catch(err => console.log(err)) 
    }
  onClickSignup(e){
    e.preventDefault();
    this.setState({showSignup: !this.state.showSignup })
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  } 
  zhandleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      
        <form onSubmit={this.handleSubmit}>
          {this.state.errmessage && <h4 style={{color:"red",alignContent:"center"}}>Incorrect password or email </h4>}
          <FormGroup controlId="email" bsSize="large">
          <ControlLabel>email</ControlLabel>
            <FormControl
              // autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              
            />

          </FormGroup>
          <Button
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.loginOnClick.bind(this)}
          >
            login
          </Button><br/>
          {this.state.volunteerrating && <Redirect to={{
            pathname: '/addrating',
            state: { firstname: this.state.firstname}
          }} />}
          
          <p>No account ?   <a href="#" onClick={this.onClickSignup.bind(this)}>Signup
          {this.state.showSignup ? <Redirect to={{
            pathname: '/Signup'
          }} />: null}</a></p>
          
        </form>
      </div>
    );
  }
}
