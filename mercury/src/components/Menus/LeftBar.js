import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftBar.css';
import Logo from "../Logo/Logo";

class LeftBar extends React.Component {
    render() {
        return(
            <div className="left-bar">
                <div className="wrap-logo-lbar">
                    <Logo/>
                </div>

                <nav>
                    <ul className="nav-left">
                        <li className="home-item item-nav">
                            <NavLink to="/home" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="workflow-item item-nav">
                            <NavLink to="/workflow" activeClassName="active">Workflow</NavLink>
                        </li>
                        <li className="statistics-item item-nav">
                            <NavLink to="/statistics" activeClassName="active">Statistics</NavLink>
                        </li>
                        <li className="calendar-item item-nav">
                            <NavLink to="/calendar" activeClassName="active">Calendar</NavLink>
                        </li>
                        <li className="users-item item-nav">
                            <NavLink to="/users" activeClassName="active">Users</NavLink>
                        </li>
                        <li className="settings-item item-nav">
                            <NavLink to="/settings" activeClassName="active">Settings</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default LeftBar;