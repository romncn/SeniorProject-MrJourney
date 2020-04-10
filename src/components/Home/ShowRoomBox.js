import React from 'react';
import "../../static/css/Show-Room.css";
import BgSlide1 from '../../static/img/bg-slide-test-1.jpg';
import Logo from '../../static/img/logojourney.png';


const ShowRoomBox = () => {
    return (
        <section className="py-5">
            <div className="Show-Join-Room">
                <div className="container">
                    <div className="row">

                        <div className="col-4">
                            <div className="col">
                            <img src={Logo} height="45" alt="MrJourney" />
                                <div class="alert box-room show-box">
                                    <img class="d-block w-100" src={BgSlide1} alt="First slide" />
                                    <div class="box-room-details show-box mt-2">
                                        <div className="mt-3 mr-3 ml-3 mb-0">
                                            <h3 className="py-1">Let'Go Chonburi !</h3>
                                            <span className="py-1">Province : </span>
                                            <br /><span className="py-1">Date : </span>
                                            <p/><i class="fas fa-user fa-lg ml-2" style={{color:"dodgerblue"}}></i>
                                            <i class="fas fa-user fa-lg ml-2 mb-0" style={{color:"hotpink"}}></i>
                                            <br/><span className="mt-0 ml-2" style={{fontSize:"8px"}}>อายุ 20 ปีขึ้นไป</span>
                                            <p className="text-right" style={{fontSize:"13px"}}>ผู้สร้าง chutikann</p>
                                        </div>
                                        <div className="navbar">
                                            <div>
                                                <button type="button" class="btn btn-warning text-white">Join</button>
                                            </div>
                                            <div className="button-search">
                                            <i class="fas fa-search text-warning fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowRoomBox;