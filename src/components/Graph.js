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
        animationEnabled: true,
        animationDuration: 2000,
        title: {
          text: `City Statistics for ${this.props.cityName}`
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Cost of Living", y: this.props.CostOfLiving },
                      { label: "Average Rent Index",  y: this.props.Rent  },
                      { label: "Crime Rate Index",  y: this.props.Crime  },
                      { label: "Healthcare Index",  y: this.props.HealthCare},
                      { label: "Pollution Index",  y: this.props.Pollution},
                      { label: "Traffic Index",  y: this.props.Traffic}
                      
                  ]
         }],

         axisY:{
            stripLines:[{
              startValue: 97,
              endValue: 103,
              color:"#000000",
              label : "New York City",
              labelFontColor: "#f4f4f4",
              showOnTop: true,
              labelBackgroundColor: '#000000'
            }],
            interval: 25,
            viewportMaximum: 200,
            viewportMinimum: 0,
         }
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
