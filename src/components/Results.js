import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Graph from './Graph'
import numbeo from '../api/numbeo'


class Results extends Component{
    
constructor(props){
    super(props)
    this.state = {
        QualityOfLife: null,
        Rent: null,
        CostOfLiving: null,
        Crime: null,
        HealthCare: null,
        Pollution: null,
        Traffic: null
        }
}
    

    componentWillReceiveProps(nextProps){
        if (this.props.cityName !== nextProps.cityName){
            console.log('SUP' + nextProps.cityName)
            numbeo.get(`indices?&query=${(nextProps.cityName).replace(/\s/g,'')}`).then(response =>{
                console.log(response)
                this.setState({
                    QualityOfLife: Math.round(response.data.quality_of_life_index),
                    Rent: Math.round(response.data.rent_index),
                    CostOfLiving: Math.round(response.data.cpi_index),
                    Crime: Math.round(response.data.crime_index),
                    HealthCare: Math.round(response.data.health_care_index),
                    Pollution: Math.round(response.data.pollution_index),
                    Traffic: Math.round(response.data.traffic_index)
                }) 
            })
            return true 
        }
        return false
    }

    render(){
        

        if(this.state.QualityOfLife == null){
        return(
            
            <div className='container'>
                <h1>Enter a city to begin</h1>
            </div>
        ) 
        }
        else{
            return(
                <Graph 
                cityName={this.props.cityName} 
                QualityOfLife={this.state.QualityOfLife} 
                Rent={this.state.Rent} 
                CostOfLiving={this.state.CostOfLiving} 
                Crime={this.state.Crime} 
                HealthCare={this.state.HealthCare}
                Traffic={this.state.Traffic}
                Pollution={this.state.Pollution}/>
            )
        }
    }
}

export default Results