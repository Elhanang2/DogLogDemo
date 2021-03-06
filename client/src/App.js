import React, { Component } from 'react';
import "./App.css";
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Animalinfo from "./components/Animalinfo";
import Maps from "./components/Map";
import QuickStart from "./components/QuickStart";
import About from "./pages/About";
import AddRating from "./components/AddRating";
import DogSearch from "./components/SearchForm";
import Routing from "./components/RatingResult"

class App extends Component {
  render() {
    return (
      <div className="bigcontainer">
        
        <Router>
        
        <div>
        <Routing />
        <NavBar />
        
          <Route exact path="/" component={About} />
          <Route exact path="/map" component={Maps} />
          <Route exact path="/dogsearch" component={DogSearch} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/contact" component={Contact} />
          
          <Route exact path="/animals" component={Animalinfo} />  
          <Route exact path="/quickstart" component={QuickStart} />
          
          <Switch>
          <Route path="/login" component={Login} />
          <Route path="/addrating" component={AddRating} />
        </Switch>
        </div>
      </Router>

        <Footer />
        
      </div>
    );
  }
}

export default App;
