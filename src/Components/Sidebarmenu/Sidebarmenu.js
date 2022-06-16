import React from 'react'
import '../../Assets/Scss/Sidebar.scss';
import Nav from 'react-bootstrap/Nav';
import dashboard from '../../Assets/Img/dashboard.png'
import Vector from '../../Assets/Img/Vector.png'
import file from '../../Assets/Img/file.png'
import stats from '../../Assets/Img/stats.png'
import community from '../../Assets/Img/community.png'
import log_out from '../../Assets/Img/log-out.png'

function Sidebarmenu() {
    return (
        <div className="main_sidebar">
            <div className="main_bar">
                <div className="sidebar-menu">
                    <div className='main-sidebar'>
                        <div className="title">
                            <h1>metr<span>ix</span>.</h1>
                        </div>
                        <ul className="menu">
                            <li>
                                <Nav>
                                    <Nav.Link href="/" disabled>
                                        <img src={dashboard} alt="" /><span>Dashboard</span>
                                    </Nav.Link>
                                </Nav>

                            </li>
                            <li>
                                <Nav.Link href="/esg" disabled>
                                    <img src={Vector} alt="" /><span>PEF Calculator</span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="/esg" disabled>
                                    <img src={file} alt="" /><span>ESG Assessment</span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="/esg" disabled>
                                    <img src={stats} alt="" /><span>Reports</span>
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href="/esg" disabled>
                                    <img src={community} alt="" /><span>Account</span>
                                </Nav.Link>
                            </li>
                        </ul>
                        <div className='end-menu'>
                            <ul className="">
                                <li><span>Upgrade Plan</span></li>
                                <li><img src={log_out} alt="" /><span>Log Out</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebarmenu
