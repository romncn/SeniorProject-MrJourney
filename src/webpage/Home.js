import React from 'react';
import NavWebPage from '../components/Nav/NavWebPage';
import CarouselHeader from '../components/Home/CarouselHeader';
import ShowRoomBox from '../components/Home/ShowRoomBox';
import '../static/css/Show-Room.css';



class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="top-page">
                    <NavWebPage />
                </div>
                <div className="content-page">
                    <div className="Carousel-Header">
                        <CarouselHeader></CarouselHeader>
                    </div>
                    <ShowRoomBox></ShowRoomBox>
                </div>
            </div>

        )
    }
}

export default Home;