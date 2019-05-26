import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Home.css'
      
class Home extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
          isVisible: true,
          cityName: null
        }
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
      }

    handleChange = (e) => {
        
        this.setState({
            cityName : e.target.value
        }) 
        
    }  

    handleButtonClicked(){
        this.setState({
            isVisible: false
        })
    }  
    render(){
       console.log(this.state.cityName)
        return(
            <div className='home'>
            <div className='container'>
                <Paper elevation={1} id='paper-space'>
                    <h1>Welcome to City Stats</h1>
                    <p>Type in city name and state or province if applicable</p>
                    <div id='bar'>
                        <TextField
                        id='cityName'
                        margin='normal'
                        color='900'
                        label='Enter City Name'
                        placeholder="Example: Houston, TX"
                        variant="outlined"
                        onChange={this.handleChange}
                        />
                    <Button variant='contained' color='primary'>Submit</Button>
                    </div>
                </Paper>
            </div>
            </div>
        )
    }
    
}

export default Home