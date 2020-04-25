import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import App from './App';
import CreateTrip from './linepage/CreateTrip';
import Home from './webpage/Home';
import CreateJoinRoom from './webpage/CreateJoinRoom';
import JoinedRoom from './webpage/JoinedRoom';
import Profile from './webpage/Profile';
import CheckTrip from './linepage/CheckTrip';


// ReactDOM.render
// (<App />, 
// document.getElementById('root')
// );

ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/CheckTrip" component={CheckTrip}/>
        <Route path="/CreateTrip" component={CreateTrip}/>
        <Route path="/CreateJoinRoom" component={CreateJoinRoom}/>
        <Route path="/JoinedRoom" component={JoinedRoom}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Profile" component={Profile}/>
        
    </Router>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

