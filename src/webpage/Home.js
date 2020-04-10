import React from 'react';
import NavWebPage from '../components/Nav/NavWebPage';
import CarouselHeader from '../components/Home/CarouselHeader';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="top-page">
                    <NavWebPage/>
                </div>
                <div className="content-page">
                    <div className="Carousel-Header">
                    <CarouselHeader></CarouselHeader>
                    </div> 
                    <div className="Show-Join-Room">

                    </div>
                </div>
            </div>

        )
    }
}

export default Home;