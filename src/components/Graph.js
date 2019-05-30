import React, {Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export default class Graph extends Component {	
    
    
    render() {
      const options = {
        title: {
          text: "City Statistics for INSERT CITY"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "New York (Benchmark)",  y: 100  },
                      { label: "Orange", y: 15  },
                      { label: "New York", y: 150 },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                      
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }
