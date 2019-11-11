import React, {Component} from 'react'
import {Map, Layers, layer, Overlay} from 'react-openlayers'



class CityMap extends Component{
    
    render(){
        return(
            <div>
                <Map view={{center: [29, -95], zoom: 1}}>
                <Layers>
                    <layer.Tile/>
                </Layers>        
                </Map> 
            
            </div>
            
        )
    }
}

export default CityMap