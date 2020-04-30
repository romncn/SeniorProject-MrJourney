import React from 'react';
import NavWebPage from '../components/Nav/NavWebPage';
import CarouselHeader from '../components/Home/CarouselHeader';
import ShowRoomBox from '../components/Home/ShowRoomBox';
import '../static/css/Show-Room.css';
import FooterWebPage from '../components/Footer/FooterWebPage';



class Home extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">
                <div className="top-page">
                    <NavWebPage />

                    <div className="content-page">
                        <div className="Carousel-Header">
                            <CarouselHeader></CarouselHeader>
                        </div>
                        <ShowRoomBox></ShowRoomBox>
                    </div>
                </div>
                <div className="footer-page">
                    <FooterWebPage></FooterWebPage>
                </div>
            </div>

        )
    }
}

export default Home;