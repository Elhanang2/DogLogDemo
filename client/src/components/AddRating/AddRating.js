import React, { Component } from 'react';
import { FormGroup, FormControl,ControlLabel,Button } from "react-bootstrap";
import "./AddRating.css"
import axios from "axios";
// import Toggle from "../Toggle";
import Togglebutton from '../Togglebutton';
class AddRating extends Component {
    constructor(props) {
        super(props);
        this.onAddratingChange=this.onAddratingChange.bind(this);
        this.state = {
            volunteer_report: [],
            name: "",
            animal_id: "",
            sit_rating: "",
            lay_down_rating: "",
            walk_on_leash_rating: "",
            sit_in_crate_rating: "",
            comment: "",
            isHidden: true 
        }
        
    }
    onAddratingChange=event =>{
        const { name, value }= event.target;
        this.setState({[name]: value });

    }
       
    submitAddratingForm(event) {
        event.preventDefault();
        const { name, sit_rating, lay_down_rating, walk_on_leash_rating, sit_in_crate_rating, comment,animal_id}= this.state;
        
        axios.post("/api/addrating/:"+animal_id,{ name, sit_rating, lay_down_rating, walk_on_leash_rating, sit_in_crate_rating, comment } )
        .then((addratingresult) => {
            console.log(addratingresult);
            this.setState({
                
                name: "",
                animal_id: "",
                sit_rating: "",
                lay_down_rating: "",
                walk_on_leash_rating: "",
                sit_in_crate_rating: "",
                comment: ""
            })
        }
        
        )}

    render() {
        // console.log(this.props);
        return (
            <div className="volunteerrating">
                <form  id='add-rating' >

                    <FormGroup className='field'>
                        <ControlLabel> Volunteer Name </ControlLabel>
                        <input type="text" name="name" vlaue={this.state.name} onChange={this.onAddratingChange }/>
                    </FormGroup>
                    <FormGroup className='field'>
                        <ControlLabel> Dog Id </ControlLabel>
                        <input type="text" name="animal_id" vlaue={this.state.animal_id} onChange={this.onAddratingChange }/>
                    </FormGroup>
<p4>rating system: 1 = reasonable, 2 = good; 3 = excellent</p4>
<br/>
<br/>
                    <FormGroup className='field'>
                        <ControlLabel> sit_rating </ControlLabel>
                        <FormControl componentClass="select" name="sit_rating" value={this.state.value} onChange={this.onAddratingChange} >
                        <option value='select'> select </option>
                        <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> lay_down_rating </ControlLabel>
                        <FormControl componentClass="select" name="lay_down_rating" value={this.state.value} onChange={this.onAddratingChange} >
                        <option value='select'> select </option>    
                        <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> walk_on_leash_rating </ControlLabel>
                        <FormControl componentClass="select" name="walk_on_leash_rating" value={this.state.value} onChange={this.onAddratingChange} >
                        <option value='select'> select </option>   
                        <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> sit_in_crate_rating </ControlLabel>
                        <FormControl componentClass="select" name="sit_in_crate_rating" value={this.state.value} onChange={this.onAddratingChange} >
                        <option value='select'> select </option>        
                        <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup className='field'>
                        <ControlLabel> Comment </ControlLabel>
                        <FormControl componentClass="textarea" type="text" name="comment" value={this.state.comment} onChange={this.onAddratingChange} />

                    </FormGroup>

                    <Button bsSize="large" className='submit' onClick={this.submitAddratingForm.bind(this)}>Submit</Button>
                
                </form>
            </div>
        );
    }
}

export default AddRating;