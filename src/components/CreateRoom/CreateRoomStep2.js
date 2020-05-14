import React from 'react';

import '../../static/css/Stepper.css';
import LogoStep1 from '../../static/img/LogoStep1.png'
import LogoStep2 from '../../static/img/LogoStep2.png'
import LogoStep3 from '../../static/img/LogoStep3.png'
// import FooterTripPage from '../components/Footer/FooterTripPage';
import FooterTripPage from '../../components/Footer/FooterTripPage'

class CreateRoomStep2 extends React.Component {
    constructor() {
        super()
        this.state = {
            gender: [
                'ชาย',
                'หญิง',
                'ไม่ระบุ'
            ],
            age: [
                '> 18 ปี',
                '< 18 ปี',
                'ไม่จำกัด'
            ]

        }
    }
    render() {
        return (
            <div>
                <div className="show-step-room py-2">
                    <div className="step-progress step-2 mt-3 pt-2">
                        <ul>
                            <li>
                                <img src={LogoStep1} style={{ opacity: "20%" }} /><br />
                                <i class="fas fa-sync-alt"></i>
                                <p>สร้างห้อง</p>
                            </li>
                            <li>
                                <img src={LogoStep2} style={{ opacity: '80%' }} /><br />
                                {/* <i class="fas fa-sync-alt"></i> */}
                                <i class="fas fa-times"></i>
                                <p>ระบุเงื่อนไข</p>
                            </li>
                            <li>
                                <img src={LogoStep3} style={{ opacity: '20%' }} /><br />
                                <i class="fas fa-times"></i>
                                <p>ตรวจสอบ</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="create-room-form py-3">
                    <form>
                        <div className="form-group">
                            <div className="container">

                                <div className="pt-4">
                                    <label htmlFor="example-date-input">จำนวนคนที่เปิดรับ<span className="p-1" style={{ color: "red" }}>*</span></label>
                                    <div className="input-group">

                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number"
                                                onClick={this.props.handleMemberFormMinus}>
                                                <span className="fas fa-minus"></span>
                                            </button>
                                        </span>

                                        <input type="text" name="maxMember" className="form-control input-number" value={this.props.RoomForm.maxMember} />

                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default btn-number"
                                                onClick={this.props.handleMemberFormPlus}>
                                                <span className="fas fa-plus" aria-hidden="true"></span>
                                            </button>
                                        </span>
                                    </div>
                                </div>


                                <div class="pt-4">
                                    <label for="exampleInputEmail1" >เพศ<span className="p-1" style={{ color: "red" }}>*</span></label>
                                    <div className="btn-group pl-5">
                                        <select className=" btn province-btn dropdown-toggle"
                                            name="genderCondition"
                                            value={this.props.RoomForm.genderCondition}
                                            onChange={(e) => this.props.handleForm(e)}
                                            id="dropdownMenuButton">
                                            {this.state.gender.map((ShowGender) => {
                                                return (
                                                    <option value={ShowGender}>{ShowGender}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>


                                <div class="pt-4">
                                    <label for="exampleInputEmail1" >ช่วงอายุ<span className="p-1" style={{ color: "red" }}>*</span></label>
                                    <div className="btn-group pl-5">
                                        <select className=" btn province-btn dropdown-toggle"
                                            name="ageCondition"
                                            value={this.props.RoomForm.ageCondition}
                                            onChange={(e) => this.props.handleForm(e)}
                                            id="dropdownMenuButton">
                                            {this.state.age.map((ShowAge) => {
                                                return (
                                                    <option value={ShowAge}>{ShowAge}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>



                                <div className="buttom-page py-3">
                                    <div className="py-3" style={{ marginBottom: "25px", marginTop: "20px" }}>
                                        {/* <div className=" col-2 float-right "> */}
                                        <div className="row">
                                            <div className="next-btn col-6">
                                                <button type="button" className="btn btn-warning btn-lg btn-block text-white"
                                                    onClick={this.props.handlePreviousStep}>ย้อนกลับ</button>
                                            </div>
                                            <div className="next-btn col-6">
                                                <button type="button" className="btn btn-warning btn-lg btn-block text-white"
                                                    onClick={this.props.handleStep}>ต่อไป</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default CreateRoomStep2;