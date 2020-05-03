import React from 'react';
import '../../static/css/App.css';
import "../../static/css/Event-Trip.css";
import Swal from 'sweetalert2';


import { Steps } from 'antd';

const { Step } = Steps;

class CreateTripStep2 extends React.Component {


    Alert = () => {

        Swal.fire({

            text: 'ชื่อสถานที่',
            input: 'text',
            inputPlaceholder: 'ระบุกิจกรรมหรือสถานที่ที่จะไป',
            showCancelButton: false,
            confirmButtonColor: '#F37945',
            confirmButtonText: 'Login'
        })

    }

    render() {
        return (
            <div>
                <div className="top-page mb-3">
                    <div className="content-page py-2">
                        <div className="step-createtrip">
                            <Steps current={1}>
                                <Step title="StartCreate" description="Create new trip" />
                                <Step title="AddDetails" description="Add details per day" />
                                <Step title="Finished" description="Ready to travel!" />
                            </Steps>
                        </div>
                        <div className="header-trip" style={{ marginLeft: "80px" }}>
                            <h3>ชื่อทริป : {this.props.TripForm.demoTripName}</h3>
                            <h4>จังหวัด : {this.props.TripForm.demoProvince}</h4>
                        </div>
                        <div className="container py-3">
                            <h5 className="text-center">{this.props.TripForm.demoDate}</h5>
                            {/* {this.props.TripForm.totalDate.map((PerDay, key) => {
                                return (
                                    <div>{PerDay.eventDate}{key}
                                        {PerDay.event.map((eventDetail, key) => {
                                            return (
                                                <div>
                                                    {eventDetail.eventName}
                                                    <br />{eventDetail.eventTime}
                                                    <br />{eventDetail.eventType}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })} */}
                            {this.props.TripForm.totalDate.map((PerDay, key) => {
                                return (
                                    <div class="alert event-box-active border-bottom" >
                                        <span style={{ color: "rgb(241, 82, 19)", fontSize: "24px" }}>{PerDay.eventDate}</span>
                                        <span className="float-right"><i class="fas fa-caret-up"></i></span>
                                        {PerDay.event.map((eventDetail, key) => {
                                            return (
                                                <div className="container">
                                                    <div className="row py-2">
                                                        <div className="col-9">

                                                            <span className="float-left">
                                                                {eventDetail.eventName}
                                                                <br />{eventDetail.eventTime}
                                                            </span>
                                                            <button type="button" class="event-type-btn btn float-right">
                                                                {eventDetail.eventType}</button>
                                                        </div>
                                                        <div className="col-3">
                                                            <button type="button" class="event-deleted-btn btn float-right">
                                                                <span class="shadow fas fa-trash-alt"></span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <p className="text-center"><div className="add-details-button">
                                            <i class="far fa-plus-square fa-2x pt-3" style={{ color: "rgb(241, 82, 19)" }} onClick={this.Alert}></i>
                                        </div>
                                        </p>
                                    </div>
                                )
                            })}

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
                                </div>
                                <p className="text-center"><div className="add-details-button">
                                    <i class="far fa-plus-square fa-2x pt-3" style={{ color: "rgb(241, 82, 19)" }} onClick={this.Alert}></i>
                                </div>
                                </p>
                            </div>

                            <div class="alert event-box-disabled">

                                <span> 15 สิงหาคม 2563</span>
                                <span className="float-right"><i class="fas fa-caret-down"></i></span>
                            </div>


                            <div className="buttom-page py-3">
                                <div className="container py-3">
                                    <div className="col-2 float-left ml-4">
                                        <button type="button" class="btn btn-warning btn-lg btn-block text-white" onClick={this.props.handlePreviousStep}>ย้อนกลับ</button>
                                    </div>
                                    <div className=" col-2 float-right mr-4">
                                        <button type="button" class="btn btn-warning btn-lg btn-block text-white" onClick={this.props.handleStep}>เสร็จสิ้น</button>
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

