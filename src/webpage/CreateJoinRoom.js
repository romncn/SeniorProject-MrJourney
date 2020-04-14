import React from 'react';
import NavWebPage from '../components/Nav/NavWebPage';
import '../static/css/App.css';
import { Link } from 'react-router';
import CreateRoomStep1 from '../components/CreateRoom/CreateRoomStep1';

class CreateJoinRoom extends React.Component {
    render() {
        return (
            <div className="flex-wrapper">
                <div className="top-page">
                    <NavWebPage></NavWebPage>
                    <CreateRoomStep1></CreateRoomStep1>
                </div>
                <div className="buttom-page">
                    
                </div>

            </div>
        )
    }
}

export default CreateJoinRoom;


