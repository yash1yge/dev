import React, { useState } from 'react'
import '../../Assets/Scss/Home.scss';
import Sidebarmenu from '../../Components/Sidebarmenu/Sidebarmenu.js';
import Dashboard from '../../Components/Dashboard.js';

function Home() {
    const [active, setActive] = useState(false);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`main_side toggle-icon  ${active ? "menuactive" : "menuinactive"}`}>
                    <Sidebarmenu />
                </div>
                <div className={`New_body main-card ${active ? "mainactive" : "maininactive"}`}>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Dashboard setActive={setActive} active={active} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
