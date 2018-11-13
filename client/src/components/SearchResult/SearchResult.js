import  React  from "react";
import {Jumbotron } from "react-bootstrap";
import { List, ListItem } from "../../components/List";
import { Card, CardText, CardBody, CardLink, CardHeader } from 'reactstrap'; 

   const SearchResult = props => (
     
         <div>
          <Jumbotron style={{backgroundColor:"paleturquoise"}}>
          <h1>Dogs Lists</h1> </Jumbotron>
      
          {props.animal.length ? ( 
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
              {/*<button onClick={() => this.getVolenteerRatingFromdb(animaldata._id)}>Ratings</button>*/}
                </ListItem>
              ))}
            </List>
          ):null}  
        
      </div>
      
      
    )
          
   
    

    

export default SearchResult;
 