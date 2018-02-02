import React from 'react';
import './Login.css'
import Logo from '../Logo/Logo'
import LoginForm from './LoginForm';

class Login extends React.Component {
    render() {
        return(
            <section className="login-page">
                <div className="login-window">
                    <header className="login-head">
                        <Logo/>

                        <div className="ac-link">
                            <a className="register-link">Register</a>
                            <a className="login-link">Login</a>
                        </div>
                    </header>

                    <p className="welcome-text">Welcome <span>back!</span></p>

                    <LoginForm/>
                </div>
            </section>
        );
    }
}

export default Login;