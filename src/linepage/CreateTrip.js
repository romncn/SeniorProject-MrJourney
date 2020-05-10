import React from 'react';
import '../static/css/App.css';
import CreateTripStep1 from '../components/CreateTrip/CreateTripStep1';
import CreateTripStep2 from '../components/CreateTrip/CreateTripStep2';
import NavWebPage from '../components/Nav/NavWebPage';
import FooterWebPage from '../components/Footer/FooterWebPage';
import CreateTripStep3 from '../components/CreateTrip/CreateTripStep3';
import momentjs from 'moment'




class CreateTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            StepComponent: 1,
            InputTripName: '',

            Trip: {
                demoTripName: '',
                demoProvince: '',
                demoDate: '',
                numberAddDate: 1,
                // EndDate: '2020-02-02',
                totalDay: 0,
                totalDate: [{}]
                // totalDate: [
                //     {
                //         eventDate: '2020-02-02',
                //         event: [
                //             {
                //                 eventName: 'ดอยสุเทพ',
                //                 eventTime: 0,
                //                 eventType: 'กินข้าว'
                //             },
                //             {
                //                 eventName: 'ดอยคำ',
                //                 eventTime: 0,
                //                 eventType: 'กินข้าว'
                //             }
                //         ]
                //     },
                // ]
            }
        }
    }

    // AddEvent = (e) => {

    // }

    // onhandleFormText = async (e, name) => {
    //     let v = e.target.value
    //     await this.setState(prevState => ({
    //         Trip: {                   // object that we want to update
    //             ...prevState.Trip,    // keep all other key-value pairs
    //             [name]: v       // update the value of specific key
    //         }
    //     }))
    //     console.log(this.state.Trip.demoTripName);
    //     console.log('จังหวัด',this.state.Trip.demoProvince);
    // }





    onhandleFormText = async (e) => {
        let value = e.target.value
        let name = e.target.name

        // let {value,name} = e.target
        await this.setState(prevState => ({
            Trip: {                   // object that we want to update
                ...prevState.Trip,   // keep all other key-value pairs
                [name]: value,  // update the value of specific key
            }
        }))
        // console.log(this.state.Trip.demoTripName);
        // console.log('จังหวัด',this.state.Trip.demoProvince);
    }



    // handelAddDate = () => {

    //     this.setState(prevState => ({
    //         Trip: {
    //             ...prevState.Trip,
    //             EndDate: momentjs(this.state.Trip.EndDate).add(1, 'day').format('llll')
    //         }
    //     }))
    // }




    handleComponent = () => {
        if (this.state.StepComponent === 1) {
            return <CreateTripStep1 nextButton="ต่อไป" 
                    handleStep={this.handleNextComponentStep1} 
                    TripForm={this.state.Trip} 
                    handleForm={this.onhandleFormText}
                    handleFormAddDate={this.handleNumberAddDate}
                    handleFormRemoveDate={this.handleNumberRemoveDate}
                    >
                    </CreateTripStep1>
        } if (this.state.StepComponent === 2) {
            return <CreateTripStep2 handleStep={this.handleNextComponentStep2} TripForm={this.state.Trip} handleForm={this.onhandleFormText} handlePreviousStep={this.handlePreviousComponent} ></CreateTripStep2>
        } if (this.state.StepComponent === 3) {
            return <CreateTripStep3 handleStep={this.handleNextComponent}></CreateTripStep3>
        }
    }

    handleNumberAddDate = () => {
        this.setState(prevState => ({
            Trip: {
                ...prevState.Trip,
                numberAddDate: this.state.Trip.numberAddDate + 1
            }
        }))
    }

    handleNumberRemoveDate = () => {
        this.setState(prevState => ({
            Trip: {
                ...prevState.Trip,
                numberAddDate: this.state.Trip.numberAddDate - 1
            }
        }))
    }


    setAllDate = (AllTripDate) => {
        for (let index = 0; index < this.state.Trip.numberAddDate; index++) {
            let ShowBox = {
                eventDate: momentjs(this.state.Trip.demoDate).add(index, 'day').format('DD/MM/YYYY'),
                event: []
            }
            AllTripDate.push(ShowBox)
        }
        return AllTripDate
    }

    handleNextComponentStep1 = async () => {
        let AllTripDate = []
        let AllTripDate2 = await this.setAllDate(AllTripDate)
        await this.setState(prevState => ({
            Trip: {
                ...prevState.Trip,
                totalDate: AllTripDate2
            }
        }))
        console.log(AllTripDate2);

        if (this.state.StepComponent !== 3) {
            await this.setState({ StepComponent: this.state.StepComponent + 1 })
        }
    }



    handleNextComponentStep2 = async () => {
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


