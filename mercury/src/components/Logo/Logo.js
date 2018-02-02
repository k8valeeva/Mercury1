import React from 'react';
import logo from '../../assets/img/logo.png';
import './Logo.css';

class Logo extends React.Component {
    render() {
        return(
            <div className="logo-style">
                <img src={logo} alt="Merkury" />
                <h1>Merkury</h1>
            </div>

        );
    }
}

export default Logo;