import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Boobalan Administration</h1>
                <p>React, Redux and React-Router Learning</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;