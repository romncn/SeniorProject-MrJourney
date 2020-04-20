import React, { useState } from 'react';
import '../static/css/App.css';
import CreateTripStep1 from '../components/CreateTrip/CreateTripStep1';



class CreateTripTest extends React.Component {


    render() {
        return (
            <div>
                <CreateTripStep1></CreateTripStep1>
                {/* <CreateTripStep2></CreateTripStep2> */}
                {/* <CreateTripStep3></CreateTripStep3> */}

            </div>
        )
    }
}
export default CreateTripTest;


