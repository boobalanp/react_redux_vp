import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = (loader)=> {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            { loader && <LoadingDots interval={100} dots={20} /> }
        </nav>
    );
};

Header.propTypes={
  loader: PropTypes.bool.isRequired
};

export default Header;
