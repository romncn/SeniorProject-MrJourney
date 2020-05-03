import React from 'react';
import '../static/css/App.css';
import CreateTripStep1 from '../components/CreateTrip/CreateTripStep1';
import CreateTripStep2 from '../components/CreateTrip/CreateTripStep2';
import NavWebPage from '../components/Nav/NavWebPage';
import FooterWebPage from '../components/Footer/FooterWebPage';
import CreateTripStep3 from '../components/CreateTrip/CreateTripStep3';








class CreateTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Component: <CreateTripStep1></CreateTripStep1>,
            // NumberComponent: 1
            StepComponent: 1,
            InputTripName: '',
            Trip: {
                demoTripName: '',
                demoProvince: '',
                demoDate: '2020-02-02',
                totalDay: 0,
                totalDate: [
                    {
                        eventDate: '2020-02-02',
                        event: [
                            {
                                eventName:'ดอยสุเทพ',
                                eventTime: 0,
                                eventType: 'กินข้าว'
                            },
                            {
                                eventName:'ดอยคำ',
                                eventTime: 0,
                                eventType: 'กินข้าว'
                            }
                        ]
                    },
                    {
                        eventDate: '2020-03-02',
                        event: [
                            {
                                eventName:'ดอยบางมด',
                                eventTime: 0,
                                eventType: 'นอน'
                            },
                            {
                                eventName:'ดอยสัตหีบ',
                                eventTime: 0,
                                eventType: 'แดกเต่า'
                            }
                        ]
                    }
                ]
            }
        }
    }

    // AddEvent = (e) => {
        
    // }

    onhandleFormText = async (e, name) => {
        let v = e.target.value
        await this.setState(prevState => ({
            Trip: {                   // object that we want to update
                ...prevState.Trip,    // keep all other key-value pairs
                [name]: v       // update the value of specific key
            }
        }))
        console.log(this.state.Trip.demoTripName);

    }
    handleComponent = () => {
        if (this.state.StepComponent === 1) {
            return <CreateTripStep1 nextButton="ต่อไป" handleStep={this.handleNextComponent} TripForm={this.state.Trip} handleForm={this.onhandleFormText}></CreateTripStep1>
        } if (this.state.StepComponent === 2) {
            return <CreateTripStep2 handleStep={this.handleNextComponent} TripForm={this.state.Trip} handleForm={this.onhandleFormText} handlePreviousStep={this.handlePreviousComponent} ></CreateTripStep2>
        } if (this.state.StepComponent === 3) {
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
            <div className="flex-wrapper">
                <div className="top-page">
                    <div className="Navbar-Component">
                        <NavWebPage></NavWebPage>
                    </div>
                    <div className="Content-Component">

                        {/* {this.state.Component} */}
                        {this.handleComponent()}
                    </div>
                </div>
                <div className="footer-page">
                    <FooterWebPage></FooterWebPage>
                </div>
            </div>
        )
    }
}
export default CreateTrip;


