import React from 'react';
import { Link } from 'react-router';
// import FooterTripPage from '../components/Footer/FooterTripPage';
import FooterTripPage from '../../components/Footer/FooterTripPage'

class CreateRoomStep1 extends React.Component {
    render() {
        return (
            <div>
                <div className="show-step-room">

                </div>
                <div className="create-room-form">
                    <div className="container">
                        <div class="pt-4">
                            <label for="exampleInputEmail1">ชื่อทริป<span className="p-1" style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ใส่ชื่อทริปของคุณ" />
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1">หน้าปกทริป<span className="p-1" style={{ color: "red",fontSize:"12px"}}>(ขนาดไม่เกิน 800px)</span></label>
                            <input type="file" class="form-control-file" id="exampleInputEmail1" placeholder="ใส่ชื่อทริปของคุณ" />
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1" >จังหวัด<span className="p-1" style={{ color: "red" }}>*</span></label>
                            <div class="btn-group pl-5">
                                <button class="btn province-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    เลือกจังหวัด</button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">กรุงเทพ</a>
                                    <a class="dropdown-item" href="#">ระยอง</a>
                                    <a class="dropdown-item" href="#">ชลบุรี</a>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1">วันเริ่มทริป<span className="p-1" style={{ color: "red" }}>*</span></label>
                            <input type="date" class="form-control" id="exampleInputEmail1" />
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1">วันสิ้นสุดทริป<span className="p-1" style={{ color: "red" }}>*</span></label>
                            <input type="date" class="form-control" id="exampleInputEmail1" />
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1">รายละเอียดการเดินทาง<span className="p-1" style={{ color: "red" }}>*</span></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="pt-4">
                            <label for="exampleInputEmail1">คิวอาร์โค้ด<span className="p-1" style={{ color: "red"}}>*</span></label>
                            <input type="file" class="form-control-file" id="exampleInputEmail1" placeholder="ใส่ชื่อทริปของคุณ" />
                        </div>

                    </div>
                </div>
                <div className="button-create-room">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-9"></div>
                            <div className="col-3 float-right">
                                <Link to="/CreateTrip" >
                                    <FooterTripPage footertext={"ต่อไป"}></FooterTripPage>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateRoomStep1;