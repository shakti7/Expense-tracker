import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const dataPointValues=props.data.map(dataPoint => dataPoint.value);
    const totalMaximum=Math.max(...dataPointValues);
    //Here we use spread operator as Math.max requires list 
    //of arguments whereas dataPointValues is an array of nums

    return <div className="chart">
        {props.data.map((dataPoint)=>(
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart; 