import React from 'react';
import './static/css/App.css';
import { Link } from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/CreateTrip" >
        <button>Create</button>
      </Link> 
      </div>
    );
  } 
}

export default App;
