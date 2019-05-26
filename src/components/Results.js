import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'

class Results extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>{this.props.cityName}</div>
    }
}

export default Results