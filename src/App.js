import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'
import Results from './components/Results'
import Container from '@material-ui/core/Container'
import CityMap from './components/CityMap'
import numbeo from '../src/api/numbeo'



class App extends Component {
  
constructor(props){
  super(props)
  
  this.state={
    citiesDB: {},
    lon: '',
    lat: '',
    cityName: ''
    
  }

  this.onSearchSubmit = this.onSearchSubmit.bind(this)

}
  

 

  componentDidMount = async () => {
    const response = await numbeo.get('cities')
    this.setState({citiesDB: response.data})  


  }

  onSearchSubmit(cityName){
    

    for(var city in this.state.citiesDB.cities){
      
      if (this.state.citiesDB.cities[city].city.toLowerCase() === cityName.toLowerCase()){

          var longitude = this.state.citiesDB.cities[city].longitude
          var latitude = this.state.citiesDB.cities[city].latitude

          this.setState({
            lon: longitude,
            lat: latitude,
            cityName: cityName
          })
          break;
      }
      
  }
    

  } 

  


  render() {
    return (
      <div className="App" >
        <Container>
          <div>
            <h2>CityStats</h2>
            <p>Use the search bar below to retrive data regarding a city. For cities located in a state or province, follow the city name with the abbreviation of it's respective state (Houston, TX). Otherwise, just use sity name (Belgrade)</p>
          </div>
          <Search onSubmit={this.onSearchSubmit}/>
          <Results lon={this.state.lon} lat={this.state.lat} cityName={this.state.cityName}/>
        </Container>
      </div>
    );
  }
}

export default App;
