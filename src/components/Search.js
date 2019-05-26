import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Results from './Results'

class Search extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            cityName: null
        }
    }


    
    render(){
        return(
            <div>
                <div id='bar'>
                    <TextField
                    id='cityName'
                    margin='normal'
                    color='900'
                    label='Enter City Name'
                    placeholder="Example: Houston, TX"
                    variant="outlined"
                    value = {this.state.cityName}
                    onChange={e => this.setState({cityName: e.target.value})}
                    />
                    <Button variant='contained' color='primary'>Submit</Button>

                </div>
                <Results cityName = {this.state.cityName}/>
            </div>
        )
    }
}

export default Search