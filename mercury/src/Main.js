import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Users from './components/Users/Users';
import Workflow from './components/Workflow/Workflow';
import Calendar from './components/Calendar/Calendar';

class Main extends React.Component {
    render() {
        return(
            <div className="Main">
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/statistics" component={Statistics} />
                <Route  path="/users" component={Users} />
                <Route  path="/workflow" component={Workflow} />
                <Route  path="/calendar" component={Calendar} />
            </div>
        );
    }
}

export default Main;