import React, { Component } from 'react';
import Container from '@material-ui/core/Container'


class Results extends Component{
    

    render(){
        return(
            <Container>
                <h1>Stat Results for {this.props.cityName}</h1>
                <h3>Corrdinates: {this.props.lon} , {this.props.lat}</h3>
                
            </Container>
        ) 
       
    }
}

export default Results