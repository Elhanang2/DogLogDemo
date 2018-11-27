import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { Redirect} from "react-router-dom";
import  Addrating from "../AddRating";

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
      errmessage: false,
      isLoading: true,
      loginError:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginOnClick = this.loginOnClick.bind(this);
    this.onsignin = this.onsignin.bind(this);
  }
  componentDidMount() {
    this.setState({volunteerrating:false})
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  //-----------------------------
  onsignin(e){
    e.preventDefault();
    const {email, password } =this.state;
    const volunteerlogin={
      email,password
    }
    this.setState({isLoading:true})
          
    axios.get("/api/getVolunteerLogin", {params: {email: email,
      password: password
    }}).then(res =>{ 
      console.log("first name : "+ res.data.firstname)
      if((res.data.email === this.state.email) &&
        (res.data.password === this.state.password)){
        this.setState({volunteerrating:true, errmessage: false, firstname: res.data.firstname})
      }else{this.setState({errmessage: true})}
    }
    ).catch(err => console.log(err)) 
  }
    //----------------------
  loginOnClick(e){
    e.preventDefault();
    const {email, password } =this.state;
    axios.get("/api/getVolunteerLogin", {params: {email: email,
      password: password
    }}).then(res =>{ 
      console.log("first name : "+ res.data.firstname)
      if((res.data.email === this.state.email) &&
        (res.data.password === this.state.password)){
        this.setState({volunteerrating:true, errmessage: false, firstname: res.data.firstname})
      }else{this.setState({errmessage: true})}
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
      {(this.state.loginError) ? <p>{this.state.loginError}</p>:null}
        <form onSubmit={this.handleSubmit}>
          {this.state.errmessage ? <h4 style={{color:"red",alignContent:"center"}}>Incorrect password or email </h4>:null}
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
            // onClick={this.loginOnClick.bind(this)}
            onClick={this.onsignin}
          >
            login
          </Button><br/>
          {this.state.volunteerrating ? <Redirect to={{
            pathname: '/addrating',
            state: { firstname: this.state.firstname}
          }} />:null}
          
          <p>No account ?   <a href="#" onClick={this.onClickSignup.bind(this)}>Signup
          {this.state.showSignup ? <Redirect to={{
            pathname: '/Signup'
          }} />: null}</a></p>
          
        </form>
      </div>
    );
  }
}
