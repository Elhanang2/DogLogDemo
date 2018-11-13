
import React, { Component } from 'react';
import axios from 'axios';

import { FormGroup, FormControl,ControlLabel,Button, Form } from "react-bootstrap";
import "./Animalinfo.css";

class Animalinfo extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleInputChange = this.handleInputChange.bind(this);  
        this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      animal: [],
      id: '',
      animaltype: '',
      name: '',
     weight: '',
     image: "",
      sex: '',
      age: '',
      
      message: "",
      loading: false,
    };
}

  
  handleInputChange = e => {
    
   const { name, value } = e.target;
    this.setState({ [name]: value });
    
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const { id, animaltype, name, weight , sex, age } = this.state;
    

    const formData = new FormData();
    var imagefile = document.querySelector('#animalImg');

    this.setState({loading: true}, () => {
      formData.append("image", imagefile.files[0]);
      console.log(formData);
      axios.post("https://api.imgur.com/3/image", 
        formData,
        {
        "headers": {
          "Authorization":"Client-ID 7aca4ff5e398a1a",
          'Content-Type': 'multipart/form-data'

        }
      
      }).then((response)=>{
      //console.log("img result "+ response);
      //this.getImgurl(response.id);
      const postData = { 
        id, 
        animaltype, 
        name, 
        weight, 
        sex,
        age,
        'image': response.data.data.link
      };

      axios.post('/api/putAnimal', postData)
      .then((result) => {
        //access the results here....
        // this.getDataFromDb();
        
        this.setState({
            
            id: '',
            animaltype: '',
            name: '',
           weight: '',
            sex: '',
            age: '',
           image: '',
            loading: false,
            
          });
      }).catch(err => {
        alert(err);
        this.setState({loading: false})
      });
    })
    
   
     
      
     
    })
    
    
  }
//   getImgurl=(imgid)=> {
//     axios.get("https://api.imgur.com/3/image/"+ imgid, {'headers': {
//       "Authorization":"Client-ID  8ee1b4d05dd499f"}}).then((response)=>{
        
//       })
// }
    

  render() {
    
    return (
    
      <div className="animaldata">
        <Form>
          <FormGroup controlId="formControlsId" bsSize="large">
              <ControlLabel>id </ControlLabel>
              <FormControl
                  type="id"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
          <FormGroup controlId="formControlsanimaltype" bsSize="large">
              <ControlLabel>species </ControlLabel>
              <FormControl
                  type="text"
                  name="animaltype"
                  value={this.state.animaltype}
                  onChange={this.handleInputChange}
                  />
          </FormGroup>
                
        
          <FormGroup controlId="formControlsName" bsSize="large">
            <ControlLabel>name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlsWeight" bsSize="large">
            <ControlLabel>weight</ControlLabel>
            <FormControl
            autoFocus
            type="weight"
            name="weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsAge" bsSize="large">
            <ControlLabel>age</ControlLabel>
            <FormControl
            autoFocus
            type="age"
            name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsSex" bsSize="large">
            <ControlLabel>sex</ControlLabel>
            <FormControl
            autoFocus
            type="sex"
            name="sex"
              value={this.state.sex}
              onChange={this.handleInputChange}
              
            />
          </FormGroup>
          <FormGroup controlId="formControlsimg" bsSize="large">
            <ControlLabel>img</ControlLabel>
            <FormControl
            autoFocus
            type="file"
            name="img"
            id="animalImg"
            onChange={this.handleInputChange}
            multiple
              value={this.state.img}
              
              
            />
            <p>{this.state.message}</p>
          </FormGroup>

          {
            this.state.loading
             ? 
              (
                <Button
                disabled={true}
                >LOADING
                </Button>
              )
             : 
             (
               <Button
                  // block
                  // bsSize="large"
                  // disabled={!this.validateForm()}
                  type="submit"
                  onClick={this.onSubmit}
                >
                Submit
                </Button>
            )
          }
          <br />
          
          
        </Form>
        
        </div>
    );
  }
}
export default Animalinfo;