import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [{
            name: '',
            data: [60, 75, 70, 65, 70, 75, 80, 50]
         }, {
            name: '',
            data: [50, 45, 50, 50, 60, 65, 50, 45]
         },
         {
            name: '',
            data: [40, 40, 40, 40, 40, 40, 40, 40]
         },
         ],
         options: {
            chart: {
               type: 'area',
               stacked: false,
               height: 350,
               zoom: {
                  enabled: false
               },
            },
            dataLabels: {
               enabled: false
            },
            markers: {
               size: 0,
            },
            fill: {
               colors: ['#CAA023', '#cea831', '#59B1CD'],
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
               tickAmount: 3,
               min: 25,
               max: 100,
               forceNiceScale: false,
               floating: false,
               decimalsInFloat: undefined,
               labels: {
                  show: true,
                  align: 'right',
                  minWidth: 0,
                  maxWidth: 160,
                  style: {
                     colors: [],
                     fontSize: '12px',
                     fontFamily: 'Helvetica, Arial, sans-serif',
                     fontWeight: 400,
                     cssClass: 'apexcharts-yaxis-label',
                  },
                  offsetX: 0,
                  offsetY: 0,
                  rotate: 0,
               },
            },
            stroke: {
               width: [0, 0, 0],
               curve: "smooth",
               dashArray: [0],
            },
            xaxis: {
               categories: [
                  "Q1 2022",
                  "Q2 2022",
                  "Q3 2022",
                  "Q4 2022",
                  "Q1 2023",
                  "Q2 2023",
                  "Q3 2023",
                  "Q4 2023",
               ],
            },
            title: {
               text: '',
               align: 'left',
               offsetX: 14
            },
            tooltip: {
               shared: true,
            },
            legend: {
               position: 'top',
               horizontalAlign: 'right',
               offsetX: -10
            },

         }
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
                     type="area"
                     width="100%"
                     height="280"
                     className="budgetChart"
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default AreaChart;
