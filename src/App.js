import React, { Component } from 'react';
import Home from './components/Home'
import Search from './components/Search'
import Results from './components/Results'
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
          console.log("HI: " + cityName)
          break;
      }
      
  }
    

  } 

  


  render() {
    return (
      <div className="App" >
        <div>
          <Search onSubmit={this.onSearchSubmit}/>
          <Results lon={this.state.lon} lat={this.state.lat} cityName={this.state.cityName}/>
        </div>
        

      </div>
    );
  }
}

export default App;
