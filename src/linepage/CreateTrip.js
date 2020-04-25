import React, { useState } from 'react';
import '../static/css/App.css';
import CreateTripStep1 from '../components/CreateTrip/CreateTripStep1';
import CreateTripStep2 from '../components/CreateTrip/CreateTripStep2';
import NavWebPage from '../components/Nav/NavWebPage';
import { Link } from 'react-router';
import FooterTripPage from '../components/Footer/FooterTripPage';
import CreateTripStep3 from '../components/CreateTrip/CreateTripStep3';








class CreateTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Component: <CreateTripStep1></CreateTripStep1>,
            // NumberComponent: 1
            StepComponent: 1,
        }
    }


    
    handleComponent = () =>{
        if(this.state.StepComponent === 1){
            return <CreateTripStep1 nextButton="ต่อไป" handleStep={this.handleNextComponent}></CreateTripStep1>
        }if(this.state.StepComponent === 2){
            return <CreateTripStep2 handleStep={this.handleNextComponent} handlePreviousStep={this.handlePreviousComponent} ></CreateTripStep2>
        }if(this.state.StepComponent === 3){
            return <CreateTripStep3 handleStep={this.handleNextComponent}></CreateTripStep3>
        }
    }
    handleNextComponent = async () => {
        if (this.state.StepComponent !== 3) {
            await this.setState({ StepComponent: this.state.StepComponent + 1 })
        }
    }
    handlePreviousComponent = async () => {
        if (this.state.StepComponent !== 1) {
            await this.setState({ StepComponent: this.state.StepComponent - 1 })
        }
    }




    render() {
        return (
            <div>
                <div className="Navbar-Component">
                    <NavWebPage></NavWebPage>
                </div>
                <div className="Content-Component">

                    {/* {this.state.Component} */}
                    {this.handleComponent()}
                </div>
            </div>
        )
    }
}
export default CreateTrip;


