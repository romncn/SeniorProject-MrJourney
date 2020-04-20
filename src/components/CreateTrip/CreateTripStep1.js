import React, { useState } from 'react';
import '../../static/css/App.css';
import { Link } from 'react-router';
// import NavTripPage from '../components/Nav/NavTripPage';
import NavWebPage from '../../components/Nav/NavWebPage';
import FooterTripPage from '../../components/Footer/FooterTripPage';


const InputFrom = (props) => {
    return (
        <div className="InputFrom">
            <div class="pt-4">
                <label for="exampleInputEmail1">{props.inputname}<span className="p-1" style={{ color: "red" }}>*</span></label>
                <input type={props.inputtype} class="form-control" id={props.inputid} placeholder={props.textinplaceholder} />
            </div>
        </div>
    )
}
const SelectProvince = () => {
    return (
        <div className="InputFrom">
            <div class="pt-4">
                <label for="exampleInputEmail1" >จังหวัด<span className="p-1" style={{ color: "red" }}>*</span></label>
                <div class="btn-group pl-5">
                    <button class="btn province-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        เลือกจังหวัด
  </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">กรุงเทพ</a>
                        <a class="dropdown-item" href="#">ระยอง</a>
                        <a class="dropdown-item" href="#">ชลบุรี</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
const InputAddDate = () => {
    const [dateNum, setDateNum] = useState(0);
    return (
        <div class="col pt-4">
            <label for="example-date-input">จำนวนวัน<span className="p-1" style={{ color: "red" }}>*</span></label>
            <div class="input-group">

                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={() => { setDateNum(dateNum - 1) }}>
                        <span class="fas fa-minus"></span>
                    </button>
                </span>
                <input type="text" name="quant[1]" class="form-control input-number" value={dateNum} min="1" max="10" />
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={() => { setDateNum(dateNum + 1) }}>
                        <span class="fas fa-plus" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </div>
    )
}

class CreateTripStep1 extends React.Component {


    render() {
        return (
            <div className="flex-wrapper">

                <div className="top-page">
                    {/* <NavTripPage firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"} ></NavTripPage> */}
                    <NavWebPage></NavWebPage>

                    <div className="content-page">
                        <div className="container">
                            <form>
                                <div class="form-group">
                                    <InputFrom inputname="ชื่อทริป" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อทริปท่องเที่ยว"></InputFrom>
                                    {/* <InputFrom inputname="จังหวัด" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อจังหวัดที่ต้องการเดินทาง"></InputFrom> */}
                                    <SelectProvince></SelectProvince>
                                    <InputFrom inputname="วันที่เริ่มเดินทาง" inputtype="date" inputid="example-date-input" textinplaceholder="mm-dd-yyyy"></InputFrom>
                                    <InputAddDate></InputAddDate>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="buttom-page">
                    <Link to="/CreateTripPerDay" >
                        <FooterTripPage footertext={"ต่อไป"}></FooterTripPage>
                    </Link>
                </div>

            </div>
        )
    }
}
export default CreateTripStep1;


