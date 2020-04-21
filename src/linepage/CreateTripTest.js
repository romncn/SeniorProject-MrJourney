import React, { useState } from 'react';
import '../static/css/App.css';
import CreateTripStep1 from '../components/CreateTrip/CreateTripStep1';
import CreateTripStep2 from '../components/CreateTrip/CreateTripStep2';
import NavWebPage from '../components/Nav/NavWebPage';
import { Link } from 'react-router';
import FooterTripPage from '../components/Footer/FooterTripPage';
import CreateTripStep3 from '../components/CreateTrip/CreateTripStep3';








class CreateTripTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Component: <CreateTripStep1></CreateTripStep1>,
            NumberComponent: 1
        }
    }
    handleNextComponent = async () => {
        if (this.state.NumberComponent !== 3) {
            await this.setState({ NumberComponent: this.state.NumberComponent + 1 })
            if (this.state.NumberComponent == 2) {
                await this.setState({ Component: <CreateTripStep2></CreateTripStep2> })
            }
            else if (this.state.NumberComponent == 3) {
                await this.setState({ Component: <CreateTripStep3></CreateTripStep3> })
            }
        }
    }
    handlePreviousComponent = async () => {
        if (this.state.NumberComponent !== 1) {
            await this.setState({ NumberComponent: this.state.NumberComponent - 1 })
            if (this.state.NumberComponent == 1) {
                await this.setState({ Component: <CreateTripStep1></CreateTripStep1> })
            }
            else if (this.state.NumberComponent == 2) {
                await this.setState({ Component: <CreateTripStep2></CreateTripStep2> })
            }
        }
    }
    render() {
        return (
            <div>
                <div className="Navbar-Component">
                    <NavWebPage></NavWebPage>
                </div>
                <div className="Content-Component">

                    {this.state.Component}
                </div>
                <div className="buttom-page fixed-bottom py-3">
                    <div className="container py-3">

                        {/* <div className="row">                               */}
                              <div className="col-2 float-left ml-4">
                            <button type="button" class="btn btn-warning btn-lg btn-block text-white" onClick={this.handlePreviousComponent}>ย้อนกลับ</button>
                        </div>
                            <div className=" col-2 float-right mr-4">
                                <button type="button" class="btn btn-warning btn-lg btn-block text-white" onClick={this.handleNextComponent} >ต่อไป</button>
                            </div>
                        {/* </div> */}


                    </div>
                </div>
            </div>
        )
    }
}
export default CreateTripTest;


