import React , {Component} from "react";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

class DogSearch extends Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.state={
            
            showResult: false,
            intervalIsSet: false,
            _id: 8,
            image: "image",
            weight: 66,
            age: 5,
            sex: "male",
            animal: [],
            rating: [],
            animaltype: "",
            size: "",
            agelabel: '',
            
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
      var  animaltest=[{_id: 8},
            {image: "image"},
            {weight: 66},
            {age: 5},
            {sex: "male"}]
        this.setState({ showResult: !this.state.showResult})
         this.setState({animal:{animaltest }})
       
    }
    
   render(){
       return(
        <div>
            <SearchForm  handleSearchChange={this.handleSearchChange} 
                        onClicksubmit={this.onClicksubmit}
                        showResult={this.state.showResult}
                        animal={this.animal}
            />
            
        </div>
       )
   } 
}
export default  DogSearch;