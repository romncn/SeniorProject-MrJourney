import React from 'react';
import '../../static/css/App.css';
import "../../static/css/Event-Trip.css";
import Swal from 'sweetalert2';
import CreateTripModal from '../Modal/CreateTripModal'
import LogoStep1 from '../../static/img/LogoStep1.png'
import LogoStep2 from '../../static/img/LogoStep2.png'
import LogoStep3 from '../../static/img/LogoStep3.png'

class CreateTripStep2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addModalShow: false
        }
    }
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
        let addModalClose = () =>
            this.setState({
                addModalShow: false
            })

        return (
            <div>
                <div className="top-page mb-3">
                    <div className="container content-page py-2">
                        <div className=" step-progress step-2 mt-3">
                            <ul>
                                <li>
                                    <img src={LogoStep1} style={{ opacity: "20%" }} /><br />
                                    <i class="fas fa-check"></i>
                                    <p>สร้างแผน</p>
                                </li>
                                <li>
                                    <img src={LogoStep2} style={{ opacity: '80%' }} /><br />
                                    {/* <i class="fas fa-sync-alt"></i> */}
                                    <i class="fas fa-sync-alt"></i>
                                    <p>ระบุรายละเอียด</p>
                                </li>
                                <li>
                                    <img src={LogoStep3} style={{ opacity: '20%' }} /><br />
                                    <i class="fas fa-times"></i>
                                    <p>เสร็จสิ้น</p>
                                </li>
                            </ul>
                        </div>
                        <div className="header-trip">
                            <h3>ชื่อทริป : {this.props.TripForm.demoTripName}</h3>
                            <h4>จังหวัด : {this.props.TripForm.demoProvince}</h4>
                        </div>
                        <div className="trip-perday-box py-3">
                            <h5 className="text-center">{this.props.TripForm.demoDate}</h5>

                            {/* {this.props.TripForm.totalDate.map((PerDay, key) => { //original pattern
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
                                                            <button type="button" class="event-type-btn btn p-0 ml-1 float-right">
                                                                <span class="shadow fas fa-car"></span></button>
                                                        </div>
                                                            <div className="col-3">
                                                                <button type="button" class="event-deleted-btn p-0 ml-1 btn float-right">
                                                                    <span class="shadow fas fa-trash-alt"></span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })}
                                                    <p className="text-center"><div className="add-details-button">
                                                        <i class="far fa-plus-square fa-2x pt-3" style={{ color: "rgb(241, 82, 19)" }}
                                                            onClick={() => this.setState({ addModalShow: true })}></i>
                                                        <CreateTripModal show={this.state.addModalShow}
                                                            onHide={addModalClose}></CreateTripModal>
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
                                                <i class="far fa-plus-square fa-2x pt-3" style={{ color: "rgb(241, 82, 19)" }}
                                                    onClick={() => this.setState({ addModalShow: true })}></i>
                                                <CreateTripModal show={this.state.addModalShow}
                                                    onHide={addModalClose}></CreateTripModal>
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

