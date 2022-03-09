import React, { Component } from 'react';


class LoginForm extends Component {


    componentDidMount() {
        document.querySelector('.login-form input[type="submit"]').addEventListener('click', this.signInAttempt.bind(this)); 
    }

    
    validateUserName(username) {
        if (username === '' || username.length > 15) {
            document.getElementById('username-field').className += " invalid";
            document.querySelector('#username-field .dynamic-msg').innerText = 'enter a name between 1 and 15 chars';
            return false;
        } else {
            document.getElementById('username-field').className = "row";
            document.querySelector('#username-field .dynamic-msg').innerHTML = '&nbsp';
        }
        return true;
    }

  
    validatePassword(password) {
        if (password === '' || password.length > 15) {
            document.getElementById('password-field').className += " invalid";
            document.querySelector('#password-field .dynamic-msg').innerText = 'enter a word between 1 and 15 chars';
            return false;
        } else {
            document.getElementById('password-field').className = "row";
            document.querySelector('#password-field .dynamic-msg').innerHTML = '&nbsp';
        }
        return true;
    }

  
    signInAttempt(e) {

        e.preventDefault();

        let username = document.loginForm.user.value;
        let password = document.loginForm.pass.value;

        if (!(this.validateUserName(username) && this.validatePassword(password))) {
            return;
        }


        if (!this.props.onLogin(username, password)) {
            document.getElementById('username-field').className += " invalid";
            document.getElementById('password-field').className += " invalid";
        } else {
            document.querySelector('body').className += " logged-in";
        }

    }
    
  
    render() {

        return (

            <div className="row card">
                    
                <div className="col span-1-of-2">
                    
                    <form name="loginForm" action="#" method="#" className="login-form">
                        
                        <fieldset>
                            <legend><ion-icon name="lock" className="lock"></ion-icon></legend>
                            <div className="row">
                                <h2>Cadastro</h2>
                            </div>
                            <div className="row form-msg">
                                Registrar? <a href="#">Clique aqui!</a> 
                            </div>

                            <div className="row" id="username-field">
                                <div className="col span-1-of-8 form-icon">
                                    <label htmlFor="username"><ion-icon name="person"></ion-icon></label>
                                </div>
                                <div className="col span-7-of-8">
                                    <input name="user" type="text" placeholder="username" />
                                    <div className="dynamic-msg">&nbsp;</div>
                                </div>
                            </div>

                            <div className="row" id="password-field">
                                <div className="col span-1-of-8 form-icon">
                                    <label htmlFor="username"><ion-icon name="finger-print"></ion-icon></label>
                                </div>
                                <div className="col span-7-of-8">
                                    <input name="pass" type="password" placeholder="password" />
                                    <div className="dynamic-msg">&nbsp;</div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col span-1-of-2">
                                    &nbsp;
                                </div>
                                <div className="col span-1-of-2">
                                    <input className="submit-btn" type="submit" value="login" />
                                </div>
                            </div>

                            <div className="row remember-me-row">
                                <div className="col span-1-of-1 remember-me">
                                    <label htmlFor="remember-me">Remember Me</label>
                                    <input name="remember-me" type="checkbox" defaultChecked />
                                </div>
                            </div>

                        </fieldset>

                        <div className="form-msg forgot-pass">
                            <a href="#">Esqueceu usuario ou senha?</a>
                        </div>
                            
                    </form>

                </div>
    
                <div className="col span-1-of-2">
                    &nbsp;
                </div>
            </div>
        );
    }
}

export default LoginForm;