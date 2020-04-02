import React from 'react';
import '../static/css/App.css';
import NavTripPage from '../components/Nav/NavTripPage';

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
                    0401
                </div>

            </div>
        )
    }
}
export default CreateTrip;


