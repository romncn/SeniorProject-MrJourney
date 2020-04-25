import React, { useState } from 'react';
import '../../static/css/App.css';
import "../../static/css/Event-Trip.css";
import { Link } from 'react-router';
import NavWebPage from '../../components/Nav/NavWebPage';
import FooterTripPage from '../../components/Footer/FooterTripPage';


class CreateTripStep2 extends React.Component {

    render() {
        return (
            <div>

                <div className="top-page">

                    <div className="content-page py-3">
                        <div className="container">
                            <div class="alert event-box-active border-bottom" >

                                <span style={{ color: "rgb(241, 82, 19)", fontSize: "24px" }}>14 สิงหาคม 2563</span>
                                <span className="float-right"><i class="fas fa-caret-up"></i></span>
                                <div className="container">
                                    <div className="row py-2">
                                        <div className="col-9">
                                            <span className="float-left">ดอยสุเทพ</span>
                                            <button type="button" class="event-type-btn btn float-right">
                                                <span class="shadow fas fa-car"></span></button>
                                        </div>
                                        <div className="col-3">
                                            <button type="button" class="event-deleted-btn btn float-right">
                                                <span class="shadow fas fa-trash-alt"></span></button>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-9 bg-light py-1 my-1">
                                            <span className="float-left">แวะกินข้าว</span>
                                            <button type="button" class="event-type-btn btn float-right">
                                                <span class="shadow fas fa-utensils"></span></button>
                                        </div>
                                        <div className="col-3">
                                            <button type="button" class="event-deleted-btn btn float-right">
                                                <span class="shadow fas fa-trash-alt"></span></button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center"><i class="far fa-plus-square fa-2x pt-3" style={{ color: "rgb(241, 82, 19)" }}></i></p>

                            </div>
                            <div class="alert event-box">

                                <span> 15 สิงหาคม 2563</span>
                                <span className="float-right"><i class="fas fa-caret-down"></i></span>

                            </div>
                            <div class="alert event-box">

                                <span>16 สิงหาคม 2563</span>
                                <span className="float-right"><i class="fas fa-caret-down"></i></span>

                            </div>

                            <div className="buttom-page fixed-bottom py-3">
                                <div className="container py-3">
                                    <div className="col-2 float-left ml-4">
                                        <button type="button" class="btn btn-warning btn-lg btn-block text-white" onClick={this.props.handlePreviousStep}>ย้อนกลับ</button>
                                    </div>
                                    <div className=" col-2 float-right mr-4">
                                        <button type="button" class="btn btn-warning btn-lg btn-block text-white"onClick={this.props.handleStep}>เสร็จสิ้น</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div className="buttom-page">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <Link to="/CreateTrip" >
                                    <FooterTripPage footertext={"ย้อนกลับ"}></FooterTripPage>
                                </Link>
                            </div>
                            <div className="col-9">
                                <Link to="/CreateTrip" >
                                    <FooterTripPage footertext={"เสร็จสิ้น"}></FooterTripPage>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default CreateTripStep2;

