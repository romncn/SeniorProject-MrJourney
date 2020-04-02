import React from 'react';
import '../static/css/App.css';
import { Link } from 'react-router';
import NavTripPage from '../components/Nav/NavTripPage';
import FooterTripPage from '../components/Footer/FooterTripPage';


const InputFrom = (props) => {
    return (
        <div className="InputFrom">
            <div class="col pt-4">
                <label for="exampleInputEmail1">{props.inputname}</label>
                <input type={props.inputtype} class="form-control" id={props.inputid} placeholder={props.textinplaceholder} />
            </div>
        </div>
    )
}

class CreateTrip extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">

                <div className="top-page">
                    <NavTripPage firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"} ></NavTripPage>
                </div>
                <div className="content-page">
                    <form>
                        <div class="form-group">
                            <InputFrom inputname="ชื่อทริป" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อทริปท่องเที่ยว"></InputFrom>
                            <InputFrom inputname="จังหวัด" inputtype="email" inputid="exampleInputEmail1" textinplaceholder="ใส่ชื่อจังหวัดที่ต้องการเดินทาง"></InputFrom>
                            <InputFrom inputname="วันที่เริ่มเดินทาง" inputtype="date" inputid="example-date-input" textinplaceholder="mm-dd-yyyy"></InputFrom>
            
                        </div>

                    </form>
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
export default CreateTrip;


