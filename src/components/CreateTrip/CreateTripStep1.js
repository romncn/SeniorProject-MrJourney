import React, { useState } from 'react';
import '../../static/css/App.css';
import '../../static/css/Stepper.css';
import LogoStep1 from '../../static/img/LogoStep1.png'
import LogoStep2 from '../../static/img/LogoStep2.png'
import LogoStep3 from '../../static/img/LogoStep3.png'


const InputFrom = (props) => {
    return (
        <div className="InputFrom">
            <div className="pt-4">
                <label htmlFor="exampleInputEmail1">{props.inputname}<span className="p-1" style={{ color: "red" }}>*</span></label>
                <input type={props.inputtype} className="form-control" value={props.InputFromValue} onChange={props.OnHandleForm} id={props.inputid} placeholder={props.textinplaceholder} />
            </div>
        </div>
    )
}
// const SelectProvince = () => {
//     return (
//         <div className="InputFrom">
//             <div class="pt-4">
//                 <label for="exampleInputEmail1" >จังหวัด<span className="p-1" style={{ color: "red" }}>*</span></label>
//                 <div class="btn-group pl-5">
//                     <button class="btn province-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         เลือกจังหวัด
//                     </button>
//                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                         <a class="dropdown-item">กรุงเทพ</a>
//                         <a class="dropdown-item">ระยอง</a>
//                         <a class="dropdown-item">ชลบุรี</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
const InputAddDate = () => {
    const [dateNum, setDateNum] = useState(0);
    return (

        <div className="col pt-4">
            <label htmlFor="example-date-input">จำนวนวัน<span className="p-1" style={{ color: "red" }}>*</span></label>
            <div className="input-group">

                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={() => { setDateNum(dateNum - 1) }}>
                        <span className="fas fa-minus"></span>
                    </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value={dateNum} min="1" max="10" />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={() => { setDateNum(dateNum + 1) }}>
                        <span className="fas fa-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>
    )
}

class CreateTripStep1 extends React.Component {



    render() {
        return (
            <div >

                <div className="top-page">
                    {/* <NavTripPage firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"} ></NavTripPage> */}

                    <div className=" container content-page py-2">

                        <div className="step-progress step-1 mt-3">
                            <ul>
                                <li>
                                    <img src={LogoStep1} style={{ opacity: "80%" }} /><br />
                                    <i class="fas fa-sync-alt"></i>
                                    <p>สร้างแผน</p>
                                </li>
                                <li>
                                    <img src={LogoStep2} style={{ opacity: '20%' }} /><br />
                                    {/* <i class="fas fa-sync-alt"></i> */}
                                    <i class="fas fa-times"></i>
                                    <p>ระบุรายละเอียด</p>
                                </li>
                                <li>
                                    <img src={LogoStep3} style={{ opacity: '20%' }} /><br />
                                    <i class="fas fa-times"></i>
                                    <p>เสร็จสิ้น</p>
                                </li>
                            </ul>
                        </div>

                        <div className="py-3">

                            <form>
                                <div className="form-group">

                                    <div className="InputFrom">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1">ชื่อทริป<span className="p-1" style={{ color: "red" }}>*</span></label>
                                            <input type='text' className="form-control" value={this.props.TripForm.demoTripName} onChange={(e) => this.props.handleForm(e, "demoTripName")} placeholder="ใส่ชื่อทริปท่องเที่ยว" />
                                        </div>
                                    </div>

                                    <div className="InputFrom">
                                        <div className="pt-4">
                                            <label htmlFor="exampleInputEmail1" >จังหวัด<span className="p-1" style={{ color: "red" }}>*</span></label>
                                            <div className="btn-group pl-5">
                                                <select className=" btn province-btn"
                                                    value={this.props.TripForm.demoProvince} onChange={(e) => this.props.handleForm(e, "demoProvince")}
                                                    id="dropdownMenuButton">
                                                    <option value="กรุงเทพ">กรุงเทพ</option>
                                                    <option value="ระยอง">ระยอง</option>
                                                    <option value="เชียงใหม่">เชียงใหม่</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="InputFrom">
                                        <div className="">
                                            <label htmlFor="exampleInputEmail1">เลือกวันเริ่มเดินทาง<span className="p-1" style={{ color: "red" }}>*</span></label>
                                            <input type='date' className="form-control" value={this.props.TripForm.demoDate} onChange={(e) => this.props.handleForm(e, "demoDate")} />
                                        </div>
                                    </div>
                                    {/* <InputFrom inputname="วันที่เริ่มเดินทาง" inputtype="date" inputid="example-date-input" textinplaceholder="mm-dd-yyyy"></InputFrom> */}
                                    <InputAddDate></InputAddDate>
                                </div>


                                <div className="buttom-page py-3">
                                    <div className="py-3" style={{ marginBottom: "25px", marginTop: "20px" }}>
                                        {/* <div className=" col-2 float-right "> */}
                                        <div className="next-btn">
                                            <button type="submit" className="btn btn-warning btn-lg btn-block text-white" onClick={this.props.handleStep}>{this.props.nextButton}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateTripStep1;


