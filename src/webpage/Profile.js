import React from 'react';
import NavWebPage from '../components/Nav/NavWebPage';
import ProfileImg from '../static/img/bg-slide-test-1.jpg';
import '../static/css/App.css';

import { Tabs } from 'antd';
import FooterWebPage from '../components/Footer/FooterWebPage';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}



class Profile extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">
                <div className="top-page">
                    <NavWebPage />
               
                <div className="content-page">
                    <div className="pt-5">
                        <div className="Profile-Details text-center">
                            <img src={ProfileImg} class="image_outer_container" height="200px" width="200px" alt="mrjourney-img"/>
                            <div className="line-name pt-2" style={{ fontSize: "32px" }}>คุณ : </div>
                            <div className="detail-web pt-2">
                                <span>ชื่อจริง : </span>
                                <p /><span>เพศ : </span>
                            </div>
                        </div>
                        <div className="container">
                            <div className="Profile-show-box mt-2" >

                                {/* <div className="bg-warning" style={{ width: "100%", height: "200px" }}> */}
                                {/* <div className="navbar">
                                        <div className="Bio-box">
                                            Bio
                                        </div>
                                        <div className="Bio-box">
                                            History Join Room
                                        </div>
                                        <div className="Bio-box">
                                            History Trip
                                        </div>
                                    </div>
                                    <div className="display-show-box">

                                    </div> */}
                                <Tabs onChange={callback} type="card">
                                    <TabPane tab="Bio" key="1">
                                        Content of Tab Pane 1
                                    </TabPane>
                                    <TabPane tab="Trip History" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                    <TabPane tab="Room History" key="3">
                                        Content of Tab Pane 3
                                    </TabPane>
                                </Tabs>
                                {/* </div> */}

                            </div>
                            <div className="Profile-score py-2 mt-5">
                                <div className="container">
                                    <div className="text-left pl-3">คะแนน</div><p />
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <img src={ProfileImg} class="image_outer_container" height="200px" width="200px" alt="mrjourney-img" />
                                            <div className="pt-2">ความสนุก</div>
                                        </div>
                                        <div className="col-4">
                                            <img src={ProfileImg} class="image_outer_container" height="200px" width="200px" alt="mrjourney-img" />
                                            <div className="pt-2">ความคุ้มค่า</div>
                                        </div>
                                        <div className="col-4">
                                            <img src={ProfileImg} class="image_outer_container" height="200px" width="200px" alt="mrjourney-img" />
                                            <div className="pt-2">การจัดการแผน</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="footer-page">
                        <FooterWebPage></FooterWebPage>
                </div>
            </div>
        )
    }
}
export default Profile;