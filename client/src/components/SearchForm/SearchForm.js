import React from "react";
import "./SearchForm.css";
import SearchResult from "../SearchResult";
import {Jumbotron } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { Card, CardText, CardBody, CardLink, CardHeader } from 'reactstrap'; 

import { Button,FormGroup,FormControl,ButtonGroup,Form, Col} from 'react-bootstrap';



const Search = props => (
    
            <Form>
            <ButtonGroup vertical>
            <FormGroup className="Button">
                { /*<ControlLabel>Size</ControlLabel>*/}
                <FormControl className="select"  componentClass="select" name="size" value={props.value} onChange={props.handleSearchChange}  placeholder="select size">
                    <option value="select"> what size of dog?</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="extra-large">extra large</option>
                </FormControl>
            </FormGroup>
            <FormGroup className="Button">
            {/*<ControlLabel>Age</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="agelabel" value={props.value} onChange={props.handleSearchChange} placeholder="Age">
                    <option value="select">which age group?</option>
                    <option  value="baby">baby</option>
                    <option  value="young">young</option>
                    <option value="adult">adult</option>
                    <option  value="senior">senior</option>
                </FormControl>
            </FormGroup>
      
            <FormGroup className="Button">
                {/*<ControlLabel>Sex</ControlLabel>*/}
                <FormControl className="select" componentClass="select" name="sex" value={props.value} onChange={props.handleSearchChange} placeholder="select sex">
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
                <Button className="button" onClick={props.onClicksubmit} type="submit">Search</Button>
                </ButtonGroup>
                {props.showResult && <Jumbotron style={{backgroundColor:"paleturquoise"}}>
                <h1>Dogs Lists</h1> </Jumbotron>}
            
                {/*{props.animal.length ? ( 
                  <List>
                    {props.animal.map(animaldata => (
                      <ListItem inline className="doglist" style={{ padding: "10px" }} key={animaldata._id}>
                
                        <Card className="cards">
                          <CardBody>
                          <CardHeader tag="h3"><span style={{ color: "blue" }}>Dog Name : {animaldata.name} </span></CardHeader>
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
                    <button onClick={() => this.getVolenteerRatingFromdb(animaldata._id)}>Ratings</button>
                      </ListItem>
                    ))}
                  </List>
                    ):null}  */}
              
                
                </Form> 
        
)
export default Search;