import React, { FC } from 'react';
import Neumorphic from '../../../../Components/Neumorphic';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import {  } from './Components';

import STYLES from "../../../../Constants/styles";
import * as COLORS from '../../../../Constants/colors';

// import CanvasJSReact from './canvasjs.react';
var CanvasJSReact = require('./canvasjs.react');
var CanvasJSChart = CanvasJSReact.default.CanvasJSChart;

interface ActivityGraphProps {
    graphType: String
};

const ActivityGraph: FC<ActivityGraphProps> = ({graphType}) => {
    // console.log(CanvasJSReact);
    var options = {};

    if (graphType == "spendings"){
        options = {
            animationEnabled: true,
            backgroundColor: '#F2F3F7',
            title:{
                text: "Monthly Spendings",
                fontFamily: 'Arial Rounded MT Bold',
    
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "Amount Spent (AUD)",
                fontFamily: 'Arial Rounded MT Bold',
                gridThickness: 0,
                prefix: "$",
                includeZero: false
            },
            data: [{
                yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                type: "spline",
                dataPoints: [
                    { x: new Date(2019, 9), y: 25*4 },
                    { x: new Date(2019, 10), y: 27*4 },
                    { x: new Date(2019, 11), y: 42*4 },
                    { x: new Date(2019, 12), y: 32*4 },
                    { x: new Date(2020, 1), y: 35*4 },
                    { x: new Date(2020, 2), y: 33*4 },
                    { x: new Date(2020, 3), y: 40*4 },
                    { x: new Date(2020, 4), y: 52*4 },
                    { x: new Date(2020, 5), y: 32*4 },
                    { x: new Date(2020, 6), y: 42*4 },
                    { x: new Date(2020, 7), y: 37*4 },
                    { x: new Date(2020, 8), y: 38*4 }
                ]
                }]
            }
    } else if (graphType == "frequency"){
        options = {
            animationEnabled: true,
            backgroundColor: '#F2F3F7',
            title:{
                text: "Monthly Travel Count",
                fontFamily: 'Arial Rounded MT Bold',
    
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "Number of Trips",
                fontFamily: 'Arial Rounded MT Bold',
                gridThickness: 0,
                prefix: "",
                includeZero: false
            },
            data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM",
                type: "spline",
                dataPoints: [
                    { x: new Date(2019, 9), y: 2 },
                    { x: new Date(2019, 10), y: 3 },
                    { x: new Date(2019, 11), y: 4 },
                    { x: new Date(2019, 12), y: 3 },
                    { x: new Date(2020, 1), y: 4 },
                    { x: new Date(2020, 2), y: 3},
                    { x: new Date(2020, 3), y: 4},
                    { x: new Date(2020, 4), y: 5 },
                    { x: new Date(2020, 5), y: 3 },
                    { x: new Date(2020, 6), y: 4 },
                    { x: new Date(2020, 7), y: 4 },
                    { x: new Date(2020, 8), y: 4}
                ]
                }]
            }
    } else {
        options = {
            title:{
                text: "",
            },
            data: []
            }
    }
   
    return (
        <div>
            <CanvasJSChart options = {options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
  
  }
  
//   export default ActivityGraph;
  