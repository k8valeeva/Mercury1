import React from 'react';
import ava from '../../assets/img/ava.png';
import './TopNav.css';

class TopNav extends React.Component {
    render() {
        return(
            <div className="top-nav">
               <div className="left-btn-group">
                   <button className="burger-btn"></button>
                   <button className="search-btn"></button>
               </div>

                <div className="right-btn-group">
                    <button className="add-project">Add project</button>

                    <a href="#" className="mail-icon">
                        <i className="fas fa-envelope"></i>
                    </a>

                    <a href="#" className="bell-icon">
                        <i className="fas fa-bell"></i>
                    </a>

                    <div className="user">
                        <div className="ava-wrap">
                            <img src={ava} alt="Avatar"/>
                        </div>

                        <i className="fas fa-caret-down"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNav;