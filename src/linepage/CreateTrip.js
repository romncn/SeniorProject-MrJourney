import React from 'react';
import '../static/css/App.css';
import { Link } from 'react-router';
import NavTripPage from '../components/Nav/NavTripPage';
import FooterTripPage from '../components/Footer/FooterTripPage';


class CreateTrip extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">

                <div className="top-page">
                    <NavTripPage firsttitle={"ยินดีต้อนรับ"} secondtitle={"เริ่มสร้างแผนการท่องเที่ยว"} ></NavTripPage>
                </div>
                <div className="content-page">
                    Natchanon
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


