import React,{Component} from 'react'
import "./Home.css";
import { Jumbotron } from "react-bootstrap";
import { Carousel,  } from 'react-bootstrap';
  





class Home extends Component {
    
         
         
          render() {
            
              return (
                <Carousel>
                    <Carousel.Item>
                        <img width={1400} height={400} alt="900x500" src="images/beagle.jpg" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={400} alt="900x500" src="images/bulldog.jpg" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={400} alt="900x500" src="images/dane3.jpg" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
              )
            }
        
           
         
     
 }
 
 export default Home

 

