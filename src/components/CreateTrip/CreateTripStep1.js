import React, { useState } from 'react';
import '../../static/css/App.css';


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
                    <div className="content-page py-2">
                        <div className="step-createtrip">
                           
                        </div>
                        <div className="container py-3">

                            <form>
                                <div className="form-group">

                                    <div className="InputFrom">
                                        <div className="pt-4">
                                            <label htmlFor="exampleInputEmail1">ชื่อทริป<span className="p-1" style={{ color: "red" }}>*</span></label>
                                            <input type='text' className="form-control" value={this.props.TripForm.demoTripName} onChange={(e) => this.props.handleForm(e, "demoTripName")} placeholder="ใส่ชื่อทริปท่องเที่ยว" />
                                        </div>
                                    </div>
                                    <div className="InputFrom">
                                        <div className="pt-4">
                                            <label htmlFor="exampleInputEmail1" >จังหวัด<span className="p-1" style={{ color: "red" }}>*</span></label>
                                            <div className="btn-group pl-5">
                                                <button className="btn province-btn dropdown-toggle" value={this.props.TripForm.demoProvince} onChange={(e) => this.props.handleForm(e, "demoProvince")} type="button"  id="dropdownMenuButton" data-toggle="dropdown" >
                                                    เลือกจังหวัด
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item">กรุงเทพ</a>
                                                    <a className="dropdown-item">ระยอง</a>
                                                    <a className="dropdown-item">ชลบุรี</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <InputFrom inputname="วันที่เริ่มเดินทาง" inputtype="date" inputid="example-date-input" textinplaceholder="mm-dd-yyyy"></InputFrom>
                                    <InputAddDate></InputAddDate>
                                </div>


                                <div className="buttom-page py-3">
                                    <div className="container py-3">
                                        <div className=" col-2 float-right mr-4">
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


