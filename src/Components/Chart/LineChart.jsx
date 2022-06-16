import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         options: {
            chart: {
               id: "basic-bar",
            },
            xaxis: {
               categories: ["", "", ""],
            },
            yaxis: {
               show: true,
               showAlways: true,
               showForNullSeries: true,
               seriesName: undefined,
               opposite: false,
               reversed: false,
               logarithmic: false,
               logBase: 10,
               tickAmount: 4,
               min: 20,
               max: 100,
               forceNiceScale: false,
               floating: false,
               decimalsInFloat: undefined,
            },
            plotOptions: {
               bar: {
                  columnWidth: '15%',
                  distributed: true,
               }
            },
            fill: {
               type: "solid",
               colors: ["#57D9AD", "#59B1CD", "#FFBF00"],
            },
            dataLabels: {
               enabled: false,
            },
            legend: {
               show: false,
            },
         },
         series: [{
            data: [81, 70, 92]
         }],
      };
   }
   render() {
      return (
         <div className="chartLine">
            <div className="row">
               <div className="mixed-chart">
                  <Chart
                     options={this.state.options}
                     series={this.state.series}
                     colors={this.state.colors}
                     type="bar"
                     width="100%"
                     height="400"
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default LineChart;
