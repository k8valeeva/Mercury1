import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
    render() {
        return(
            <div>
                <form className="login-form">
                    <ul>
                        <li>
                            <i className="far fa-user"></i>
                            <input type="text" name="name" placeholder="Username"/>
                        </li>
                        <li>
                            <i className="fas fa-lock"></i>
                            <input id="userPassword" type="password" placeholder="Password"/>
                        </li>
                    </ul>
                    <button type="submit" className="btn-enter">Enter</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;