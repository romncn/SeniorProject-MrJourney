import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import App from './App';
import CreateTrip from './linepage/CreateTrip';


// ReactDOM.render
// (<App />, 
// document.getElementById('root')
// );

ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/CreateTrip" component={CreateTrip}/>
        
    </Router>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

