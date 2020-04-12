import React, { useState } from 'react';
import '../static/css/App.css';
import { Link } from 'react-router';
import Logo from '../static/img/success.png';
// import NavTripPage from '../components/Nav/NavTripPage';
import NavWebPage from '../components/Nav/NavWebPage';
import FooterTripPage from '../components/Footer/FooterTripPage';

class CreateTripFinished extends React.Component {

    render() {
        return (
            <div className="flex-wrapper">

                <div className="top-page">
                    <NavWebPage></NavWebPage>
                    <div className="content-page py-3">
                        <div className="container">
                            <div className="text-center">
                                <img src={Logo} height="75" width="75" alt="Success"></img>
                                <h1 className="pt-2">เสร็จสิ้น!</h1>
                                <h2>ขอให้คุณสนุกกับการเดินทาง</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttom-page">
                    <Link to="/CreateTripPerDay" >
                        <FooterTripPage footertext={"ดูแผนการเดินทางทั้งหมด"}></FooterTripPage>
                    </Link>
                    <Link to="/CreateTripPerDay">
                        <div className="container py-3">
                            <button type="button" class="btn btn-outline-warning btn-lg btn-block">กลับสู่ห้องแชท</button>
                        </div>
                    </Link>

                </div>

            </div>
        )
    }
}

export default CreateTripFinished;

