import React,{Component} from "react";
import "./SearchForm.css";
import axios from "axios";
import SearchResult from "../SearchResult";
import {Jumbotron } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { Card, CardText, CardBody, CardLink, CardHeader } from 'reactstrap'; 

import { Button,FormGroup,FormControl,ButtonGroup,Form, Col} from 'react-bootstrap';



class Search extends Component {
    constructor(props) {
        super(props);
    
        this.handleSearchChange = this.handleSearchChange.bind(this);
    
  
    this.state={
        showResult: false,
        intervalIsSet: false,
        id: "",
        animal: [],
        rating: [],
        animaltype: "",
        size: "",
        age: "",
        agelabel: "",
        sex: ""
    }
   }

componentDidMount() {
    // this.getSearchDataFromDb();
  }
  componentWillUnmount() {   
    
  }

  handleSearchChange= event=>{
        const { name, value }= event.target;
        this.setState({[name]: value})
      }
    
    onClicksubmit= (e) =>{
        e.preventDefault();
        this.getSearchDataFromDb();
        this.setState({ showResult: !this.state.showResult});
    }
    onClickRating=(animalid) => {
     
        this.getVolenteerRatingFromdb(animalid);
    }
    getSearchDataFromDb = ()=> {
    //   const imgid="";
        const { size, agelabel, sex}= this.state;
        axios.get("/api/getAnimal" 
        ,{ params:{
            size: size,
            agelabel: agelabel,
            sex: sex
        }}
    ).then(res => this.setState({ animal: res.data })
    ).catch(err => console.log(err)) 
    }

    getVolenteerRatingFromdb = (animalid) => {
        // {animal: animalid}console.log("get rating "+ res.data)
        axios.get("/api/getrating", {params: { animalid:animalid}})
        .then(res => this.setState({rating: res.data}))
        // .then(res => this.setState({showRating:!this.state.showRating}))
        .catch(err => console.log(err))
        
    }
      
    
   
    render() {
        
        return(
            <Form>
            <ButtonGroup vertical>
            <FormGroup className="Button">
                { /*<ControlLabel>Size</ControlLabel>*/}
                <FormControl className="select"  componentClass="select" name="size" value={this.state.value} onChange={this.handleSearchChange}  placeholder="select size">
                    <option value="select"> what size of dog?</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="extra-large">extra large</option>
                </FormControl>
            </FormGroup>
            <FormGroup className="Button">
            {/*<ControlLabel>Age</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="agelabel" value={this.state.value} onChange={this.handleSearchChange} placeholder="Age">
                    <option value="select">which age group?</option>
                    <option  value="baby">baby</option>
                    <option  value="young">young</option>
                    <option value="adult">adult</option>
                    <option  value="senior">senior</option>
                </FormControl>
            </FormGroup>
      
            <FormGroup className="Button">
                {/*<ControlLabel>Sex</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="sex" value={this.state.value} onChange={this.handleSearchChange} placeholder="select sex">
                    <option value="select">male or female?</option>
                    <option value="female">female</option>
                    <option value="male">male</option>

                    </FormControl>
                </FormGroup>
             
               
                <Col>
                <FormGroup  className="textarea" controlId="formControlsTextarea">
                {/*<ControlLabel>Zipcode</ControlLabel>*/}
                    <FormControl className="text" componentClass="textarea" placeholder="Zip Code" />
                </FormGroup>
                </Col>
                <Button className="button" onClick={this.onClicksubmit} type="submit">Search</Button>
                </ButtonGroup>
                {this.state.animal.length > 0 && <Jumbotron style={{backgroundColor:"paleturquoise"}}>
                <h1>Dogs Lists</h1> </Jumbotron>}
            
                {this.state.animal.length > 0 ? ( 
                  <List>
                    {this.state.animal.map(animaldata => (
                      <ListItem inline className="doglist" style={{ padding: "10px" }} key={animaldata._id}>
                
                        <Card className="cards">
                          <CardBody>
                          <CardHeader tag="h3"><span style={{ color: "blue" }}>Dog Name : {animaldata.dogname} </span></CardHeader>
                          </CardBody>
                          {<img style={{width:150,height:150}} src={ animaldata.image } alt="dogimage"/>}
                          <CardBody>
                          <CardText><span style={{ color: "blue" }}> Weight : {animaldata.weight} </span></CardText>
                          <CardText><span style={{ color: "blue" }}> Age : {animaldata.age} </span></CardText>
                          <CardText><span style={{ color: "blue" }}> Sex : {animaldata.sex} </span></CardText>
                          <CardLink href="/Login">Volenteer Rating Form</CardLink>
                          <CardLink href="#">Dog Rating </CardLink>
                          </CardBody>
                        </Card>
                    <button onClick={ this.onClickRating(animaldata._id)}>Ratings</button>
                    
                    </ListItem>
                    ))}
                  </List>
                    ):null}  
                    {this.state.rating.length >0 && 
                        <Jumbotron style={{backgroundColor:"paleturquoise"}}>
                        <h1>Rating Lists</h1> </Jumbotron>}
                    
                        {this.state.rating.length >0 ? ( 
                          <List>
                            {this.state.rating.map(ratingdata => (
                              <ListItem inline className="doglist" style={{ padding: "10px" }} key={ratingdata._id}>
                        
                                <Card className="cards">
                                  <CardBody>
                                  <CardHeader tag="h3"><span style={{ color: "blue" }}>Dog Name : {ratingdata.sit_rating} </span></CardHeader>
                                  </CardBody>
                                  
                                </Card>
                            {/*<button onClick={() => this.getVolenteerRatingFromdb(animaldata._id)}>Ratings</button>*/}
                              </ListItem>
                            ))}
                          </List>
                        ) : null}  
                              
    
                    
                </Form> 
        )}}

export default Search;