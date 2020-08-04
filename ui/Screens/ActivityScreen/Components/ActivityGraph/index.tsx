import React, { FC } from 'react';
import Neumorphic from '../../../../Components/Neumorphic';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { G, Line, NumberProp } from 'react-native-svg'
import { View, Text } from 'react-native';


interface ActivityGraphProps {
    graphType: String
};

interface CustomGridVariables {
    x?:any;
    y?:any;
    data?:any;
    ticks?:any;
}
// interface CustomGridCreator {
//     ( x:any, y:any, data:any, ticks:any ): CustomGridVariables;
// }


//TODO: Fix the X-axis on web (works on mobile), and add axis titles
const ActivityGraph: FC<ActivityGraphProps> = ({graphType}) => {
    // console.log(CanvasJSReact);
    var options = {};
    var data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
    const dataSpendings = [25*4,27*4,42*4,32*4,35*4,33*4,40*4,52*4, 32*4,42*4, 37*4,38*4];
    var ticksSpendings = 15;
    const dataFrequency = [2,3,4,3,4,3,4,5,3,4,4,4];
    var ticksFrequency = 5;
    var numTicks = 10;

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const axesSvg = { fontSize: 10, fill: 'black' , fillOpacity: 1, opacity:1, };
    const verticalContentInset = {top: 10, bottom: 10 }
    const xAxisHeight = 30


    // a const function expression that returns a grid
    //we use destructuring to do {object params} => { param1.blah} instead of obj => {obj.param1.blah}

    //I cant get destructuring to work
    //Somehow, when the grid is created, the grid variables are passed in as a parameter? 
    const CustomGrid  =  (obj:CustomGridVariables) => {
        var ticks = obj.ticks;
        var x = obj.x;
        var y = obj.y;
        var data = obj.data;
        return (
        <G>
            {
                // Horizontal grid
                ticks.map((tick:any) => (
                    <Line
                        key={ tick }
                        x1={ '0%' }
                        x2={ '100%' }
                        y1={ y(tick) }
                        y2={ y(tick) }
                        stroke={ 'rgba(0,0,0,0.2)' }
                    />
                ))
            }
            {
                // Vertical grid
                data.map((_:any, index:any) => (
                    <Line
                        key={ index }
                        y1={ '0%' }
                        y2={ '100%' }
                        x1={ x(index) }
                        x2={ x(index) }
                        stroke={ 'rgba(0,0,0,0.2)' }
                    />
                ))
            }
        </G>
    )};
    if (graphType == "spendings"){
        data = dataSpendings;
        numTicks = ticksSpendings;
    } else if (graphType == "frequency"){
        data = dataFrequency;
        numTicks = ticksFrequency;
    }

    //transform text doesnt seem to work on mobile
    //TODO: fix X-axis on browser
    return (
        <View>
            <View style={{flexDirection:'row',transform:[{rotate:'270-deg'},{translateX:-20},{translateY:-140}]}}>
                <Text>
                    Amount Spent (AUD)
                </Text>
            </View>
                
            <View style={{ height: 200, padding: 10, flexDirection: 'row',transform:[{translateX:1}]}}>
                
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    numberOfTicks={numTicks}
                    // formatLabel={(value, index) => index}
                />
                
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        // style={{ height: 200 }}
                        data={data}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        curve={shape.curveNatural}
                        contentInset={verticalContentInset}
                        // gridMin={0}
                        numberOfTicks={numTicks}
                        >
                        {/* <Grid direction={Grid.Direction.BOTH}/> */}
                        <CustomGrid />
                        {/* <Grid /> */}
                    </LineChart>
                    {/* <View style={{transform:[{translateY:10}]}}> */}
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight,transform:[{translateY:10}]}}
                        data={data}
                        contentInset={{ left: 10, right: 10 }}
                        formatLabel={(value, index) => ''+months[index]}
                        svg={axesSvg}
                        
                    />
                    {/* </View> */}
                    
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text>
                            Months
                        </Text>
                    </View>
                    {/* <View style={{ height: 0 }}>
                        <Text style={{ fontSize: 10, color: "grey", textAlign: "center" }}>Months</Text>
                    </View> */}
                </View>
            
                
            </View>
        
        </View>

    )
}
export default ActivityGraph;