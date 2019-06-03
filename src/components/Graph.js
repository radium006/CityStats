import React, {Component } from 'react'
import CanvasJSReact from '../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export default class Graph extends Component {	
    
    constructor(props){
      super(props)
      
    }
    

    

    render() {
      const options = {
        title: {
          text: `City Statistics for ${this.props.cityName}`
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "New York (Benchmark)",  y: 100  },
                      { label: "Quality Of Life Index", y: this.props.QualityOfLife},
                      { label: "Cost of Living", y: this.props.CostOfLiving },
                      { label: "Average Rent Index",  y: this.props.Rent  },
                      { label: "Crime Rate Index",  y: this.props.Crime  },
                      { label: "Healthcare Index",  y: this.props.HealthCare}
                      
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
