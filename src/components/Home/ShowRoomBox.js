import React from 'react';
import "../../static/css/Show-Room.css";
import "../../static/css/Nav.css";
import "../../static/css/App.css";
import BgSlide1 from '../../static/img/pr-01.png';
import Logo from '../../static/img/logojourney.png';
import Swal from 'sweetalert2';
import axios from 'axios';

class ShowRoomBox extends React.Component {

    constructor() {
        super()
        this.state = {
            room: [
                {
                    // roomID: '',
                    // roomName: '',
                    // // picRoom: datas.picRoom,
                    // province: '',
                    // startDate: '',
                    // endDate: '',
                    // tripDetails: '',
                    // // QRcode: datas.QRcode,
                    // maxMember: '',
                    // genderCondition: '',
                    // ageCondition: '',
                    // status: ''
                }
            ],
            myacc: 'guest',
            myaccLog: 'Acc',
        }
    }

    componentDidMount = async () => {
        await axios.get('http://localhost:5000/room')
            .then(async res => {
                // console.log('Data from /api/room : ' + res.data)
                this.setState({
                    room: res.data
                });
            });
        // console.log('Data from state.room : ' + this.state.room);
    }

    AlertJoinRoom = () => {
        if (this.state.myacc === 'guest') {
            Swal.fire({
                icon: 'error',
                title: 'ขออภัย!',
                text: 'เงื่อนไขไม่ตรงกับทางทริปที่กำหนด',
                showCancelButton: false,
                confirmButtonColor: '#D33',
                confirmButtonText: 'กลับสู่หน้าหลัก'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'เข้าร่วมสำเร็จ!',
                text: 'ขณะนี้คุณสามารถเข้าสู่ห้องเพื่อตรวจสอบรายละเอียดได้แล้ว',
                showCancelButton: true,
                confirmButtonText: 'เข้าสู่ห้อง',
                cancelButtonText: 'กลับสู่หน้าหลัก',
            })
        }
    }

    AlertJoinRoomHaveAcc = () => {
        if (this.state.myacc === 'guest') {
            Swal.fire({
                icon: 'success',
                title: 'เข้าร่วมสำเร็จ!',
                text: 'ขณะนี้คุณสามารถเข้าสู่ห้องเพื่อตรวจสอบรายละเอียดได้แล้ว',
                showCancelButton: true,
                confirmButtonText: 'เข้าสู่ห้อง',
                confirmButtonColor: '#31CC71',
                cancelButtonText: 'กลับสู่หน้าหลัก',
            })
        }
    }

    AlertJoinRoomDontAcc = () => {
        if (this.state.myacc === 'guest') {
            Swal.fire({
                icon: 'warning',
                title: 'คุณยังไม่ได้ Login!',
                text: 'กรุณาทำการ Login ก่อนทำรายการ',
                showCancelButton: true,
                confirmButtonText: 'Login',
                confirmButtonColor: '#F37945',
                cancelButtonText: 'กลับสู่หน้าหลัก',
            })
        }
    }

    AlertRoomDetails = () => {
        Swal.fire({
            imageUrl: "//static/img/logojourney.png",
            position: 'center',
            type: 'info',
            title: `Class Information`,
            input: 'date',
            html: `<div>
            <h1> HelloWorld </h1>
            <p> TestAlert </p>
            <p className="float-right">hahaha</p>
            <img src=${Logo} height="45" alt="MrJourney" />ผู้สร้าง 
            </div>`,
        })
    }

    //  AlertTester() {
    //     const getAlert = () => (
    //         <Swal
    //             success
    //             title="Woot!"
    //             onConfirm={() => this.hideAlert()}
    //         >
    //             HelloWorld
    //         </Swal>
    //     );
    //      this.setState({
    //          alert: getAlert()
    //     })
    // }
    // hideAlert(){
    //     console.log('Hiding Alert');
    // }

    render() {
        return (
                <section className="py-5">
                    <div className="Show-Join-Room">
                        <div className="container">
                            <div className="row">

                                {this.state.room.map((room, key) => {
                                    return (
                                        // <span id={key}>
                                            <div className="col-4">
                                                <div className="col">
                                                    <img src={Logo} height="45" alt="MrJourney" />
                                                    <div class="alert box-room show-box">
                                                        <img class="d-block w-100" src={BgSlide1} alt="First slide" />
                                                        <div class="box-room-details show-box mt-2">
                                                            <div className="mt-3 mr-3 ml-3 mb-0">
                                                                <h3 className="py-1">{room.roomName}</h3>
                                                                <span className="py-1" style={{ fontSize: "14px" }}>Room ID : {room.roomID}</span>
                                                                <br /> <span className="py-1" style={{ fontSize: "14px" }}>จังหวัด : {room.province}</span>
                                                                <br /><span className="py-1" style={{ fontSize: "14px" }}>วันที่ : {room.startDate} - {room.endDate} </span>
                                                                <p /><i class="fas fa-user fa-lg ml-2" style={{ color: "dodgerblue" }}></i>
                                                                <i class="fas fa-user fa-lg ml-2 mb-0" style={{ color: "hotpink" }}></i>
                                                                <br /><span className="mt-0 ml-2" style={{ fontSize: "8px" }}>อายุ {room.ageCondition}</span>
                                                                <p className="text-right" style={{ fontSize: "13px" }}>ผู้สร้าง chutikann</p>
                                                            </div>
                                                            <div className="navbar">
                                                                <div>
                                                                    <button type="button" class="btn nav-color round text-white" onClick={this.AlertJoinRoom}>เข้าร่วม</button>
                                                                </div>
                                                                <div className="button-search">
                                                                    <i class="fas fa-search fa-2x" style={{ color: "#F37945" }} onClick={this.AlertRoomDetails}></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        // </span>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </section>
         
        )
    }
}
export default ShowRoomBox;