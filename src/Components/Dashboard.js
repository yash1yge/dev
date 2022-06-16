import React from 'react'
import '../Assets/Scss/Dashboard.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircle, FaArrowUp } from "react-icons/fa";
import LineChart from './Chart/LineChart';
import AreaChart from './Chart/AreaChart';
import PieChart2 from './Chart/PieChart2';
import PieChart from './Chart/PieChart';
import { BsThreeDots } from "react-icons/bs";
import search from '../Assets/Img/search.png';


function Dashboard({ active, setActive }) {
    return (
        <div className="row">
            <div className="main-dashboard">
                <div className="title-sec">
                    <div className='sub-title-sec d-flex align-items-center'>
                        <h2>Dashboard</h2>
                    </div>
                    <div className='search-sec'>
                        <input type="text" placeholder='Search' />
                        <div className='search-img'>
                            <img src={search} alt="" />
                        </div>
                        <div className="heder_button" onClick={() => setActive(!active)}>
                            <Link><FontAwesomeIcon icon={faBars} /></Link>
                        </div>
                    </div>
                </div>
                <div className="row maindashboard_title">
                    <div className=" main_chart col-xl-6 col-xxl-4 col-md-6 col-sm-6">
                        <div className="dashboard1">
                            <div className="dashboard_logo">
                                < BsThreeDots className='dot' />
                            </div>
                            <div className="account">
                                <h3>Account Completion</h3>
                            </div>
                            <div className="main_paichart">
                                <div className="percentage">
                                    <h2>100/150</h2>
                                </div>
                                <div className="paichart">

                                    <PieChart2 />
                                </div>
                            </div>
                            <div className="inc">
                                <FaArrowUp className='up_arrow' />
                                <h3>+14% Inc</h3>
                            </div>
                        </div>
                    </div>
                    <div className=" main_chart col-xl-6 col-xxl-4 col-md-6 col-sm-6">
                        <div className="dashboard1">
                            <div className="dashboard_logo">
                                < BsThreeDots className='dot' />
                            </div>
                            <div className="account">
                                <h3>CO2 Emissions</h3>
                            </div>
                            <div className="main_paichart">
                                <div className="percentage">
                                    <h2>3145</h2>
                                </div>
                                <div className="paichart">

                                    <PieChart2 />
                                </div>
                            </div>
                            <div className="inc">
                                <FaArrowUp className='up_arrow inc04' />
                                <h3 className='inc01'>+06% Inc</h3>
                            </div>
                        </div>
                    </div>
                    <div className=" main_chart col-xl-6 col-xxl-4 col-md-6 col-sm-6">
                        <div className="dashboard1">
                            <div className="dashboard_logo">
                                < BsThreeDots className='dot' />
                            </div>
                            <div className="account">
                                <h3>Litres of Water</h3>
                            </div>
                            <div className="main_paichart">
                                <div className="percentage">
                                    <h2>1035</h2>
                                </div>
                                <div className="paichart">

                                    <PieChart2 />
                                </div>
                            </div>
                            <div className="inc">
                                <FaArrowUp className='up_arrow inc03' />
                                <h3 className='inc02'>+04% Inc</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row graph-sec">
                    <div className="col-12 col-xl-8 graph-sub-sec">
                        <div style={{ background: "white", borderRadius: "10px", padding: "20px 30px", height: "100%" }}>
                            <div className='scoring'>
                                <span>ESG Scoring</span>
                                <div className='dropdown1'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                            By Pillar
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark">
                                            <Dropdown.Item href="#/action-1" active>
                                                By Pillar
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">By Pillar </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">By Pillar </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <LineChart />
                            <div className="labels">
                                <div className="label1">
                                    <span>Environment</span>
                                    <div style={{ height: "15px", width: "15px", backgroundColor: "#57D9AD", borderRadius: "50px" }}></div>
                                </div>
                                <div className="label1">
                                    <span>social</span>
                                    <div style={{ height: "15px", width: "15px", backgroundColor: "#59B1CD", borderRadius: "50px" }}></div>
                                </div>
                                <div className="label1">
                                    <span>Governance</span>
                                    <div style={{ height: "15px", width: "15px", backgroundColor: "#CAA023", borderRadius: "50px" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 graph-sub-sec2">
                        <div style={{ background: "white", borderRadius: "10px", padding: "20px 30px", height: "100%", fontWeight: "600" }}>
                            <div className="title">
                                <span>PEF</span>
                                <div className='dropdown1'>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                            Month
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark">
                                            <Dropdown.Item href="#/action-1" active>
                                                Day
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Month </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Year </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="inner-sub-sec-main">
                                <div className="inner-sub-sub1">
                                    <FaCircle style={{ color: "#353539" }} />
                                    <span className='translate'>Applications</span>
                                    <ProgressBar now={80} className="translate-progress" />
                                    <span className='text-end'>80%</span>
                                </div>
                                <div className="inner-sub-sub1">
                                    <FaCircle style={{ color: "#caa023" }} />
                                    <span className='translate'>Shortlisted</span>
                                    <ProgressBar now={65} className="translate-progress" />
                                    <span className='text-end'>65%</span>
                                </div>
                                <div className="inner-sub-sub1">
                                    <FaCircle style={{ color: "#f24923" }} />
                                    <span className='translate'>Rejected</span>
                                    <ProgressBar now={40} className="translate-progress" />
                                    <span className='text-end'>40%</span>
                                </div>
                                <div className="inner-sub-sub1">
                                    <FaCircle style={{ color: "#b3b9dd" }} />
                                    <span className='translate'>On Hold</span>
                                    <ProgressBar now={50} className="translate-progress" />
                                    <span className='text-end'>50%</span>
                                </div>
                                <div className="inner-sub-sub1">
                                    <FaCircle style={{ color: "#57d9ad" }} />
                                    <span className='translate'>Finalised</span>
                                    <ProgressBar now={45} className="translate-progress" />
                                    <span className='text-end'>45%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row graph-sec2">
                    <div className="col-12 col-xl-8 graph-sec2-sub1">
                        <div style={{ background: "white", borderRadius: "10px", padding: "20px 30px", height: "100%" }}>
                            <span style={{ fontWeight: 600 }}>Saving of resources over time</span>
                            <AreaChart />
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 graph-sec2-sub2">
                        <div style={{ background: "white", borderRadius: "10px", padding: "20px 30px 0 30px", height: "100%", fontWeight: "600" }}>
                            <span>Ratio by gender</span>
                            <div className="ratio-main">
                                <PieChart />
                                <div className='ratio-sub'>
                                    <div className="ratio1">
                                        <div style={{ height: "50px", width: "10px", background: "#353539", borderRadius: "50px" }}>
                                        </div>
                                        <span>Male</span>
                                    </div>
                                    <div className="ratio1">
                                        <div style={{ height: "50px", width: "10px", background: "#CAA023", borderRadius: "50px", marginLeft: "auto" }}>
                                        </div>
                                        <span>Female</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard


