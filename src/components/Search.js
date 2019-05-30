import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Search extends Component{
    
  

        state = {
            queryString: ''
        }
    

    onSearchSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.queryString)
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
                    value = {this.state.queryString}
                    onChange={e => this.setState({queryString: e.target.value})}
                    />
                    <Button variant='contained' color='primary' onClick={this.onSearchSubmit}>Submit</Button>

                </div>
                
            </div>
        )
    }
}

export default Search