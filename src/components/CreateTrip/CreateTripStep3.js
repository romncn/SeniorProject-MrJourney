import React from 'react';
import '../../static/css/App.css';
import { Link } from 'react-router';
import Logo from '../../static/img/success.png';

import { Steps } from 'antd';

const { Step } = Steps;


class CreateTripStep3 extends React.Component {

    render() {
        return (
            <div>

                <div className="top-page">

                    <div className="content-page py-2">
                        <div className="step-createtrip">
                            <Steps current={2}>
                            <Step title="StartCreate" description="Create new trip" />
                                <Step title="AddDetails" description="Add details per day" />
                                <Step title="Finished" description="Ready to travel!" />
                            </Steps>
                        </div>
                        <div className="container py-3">
                            <div className="text-center">
                                <img src={Logo} height="75" width="75" alt="Success"></img>
                                <h1 className="pt-2">เสร็จสิ้น!</h1>
                                <h2>ขอให้คุณสนุกกับการเดินทาง</h2>
                            </div>

                            <div className="buttom-page py-3 mt-4">
                                <div className="container py-3 text-center">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-6 my-2">
                                                <Link to="/CheckTrip">
                                                    <button type="button" class="btn btn-warning btn-lg btn-block text-white">ดูแผนการเดินทางทั้งหมด</button>
                                                </Link>
                                            </div>
                                            <div className="col-3"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-6 my-2">
                                                <Link to="/Home">
                                                    <button type="button" class="btn btn-warning btn-lg btn-block text-white">กลับสู่หน้าหลัก</button>
                                                </Link>
                                            </div>
                                            <div className="col-3"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="buttom-page">
                    <Link to="/CreateTripPerDay" >
                        <FooterTripPage footertext={"ดูแผนการเดินทางทั้งหมด"}></FooterTripPage>
                    </Link>
                    <Link to="/CreateTripPerDay">
                        <div className="container py-3">
                            <button type="button" class="btn btn-outline-warning btn-lg btn-block">กลับสู่ห้องแชท</button>
                        </div>
                    </Link>

                </div> */}

            </div>
        )
    }
}

export default CreateTripStep3;

