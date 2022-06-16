import React, { Component } from "react";
// import "../Assets/scss/Dashboard/Progress.scss";
import Chart from "react-apexcharts";

class PieChart2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionsRadial: {
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: "70%",
                            background: "#fff",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24,
                            },
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "67%",
                            margin: 0,
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35,
                            },
                        },

                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: -20,
                                show: true,
                                color: "#888",
                                fontSize: "13px",
                            },
                            value: {
                                formatter: function (val) {
                                    return val;
                                },
                                color: "#111",
                                fontSize: "36px",
                                fontWeight: "bold",
                                show: true,
                            },
                        },
                    },
                },
                fill: {
                    type: "solid",
                    colors: ["#7366FF"],
                    gradient: {
                        shade: "light",
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#7366FF"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },
                stroke: {
                    lineCap: "round",
                },
                labels: [""],
            },
            seriesRadial: [74],
        };
    }
    render() {
        return (
            <div className="chartLine">
                <div className="row">
                    <div className="col radial-chart">
                        <Chart
                            options={this.state.optionsRadial}
                            series={this.state.seriesRadial}
                            type="radialBar"
                            width="100"
                            height="120"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PieChart2;
