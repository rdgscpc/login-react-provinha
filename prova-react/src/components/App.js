import React, { Component } from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm';
import MembersArea from './MembersArea'


class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            mode: 'sign in',
            db: {
                users: {
                    'user': 'pass'
                }
            }
        };
        this.loginHandler = this.loginHandler.bind(this);
    }


    loginHandler(username, password) {

        if (this.state.db.users[username] === password) {
            this.setState({
                mode: 'logged in'
            });
            return true;
        } else {
            alert('Username/password combination is not valid.\nPlease check your entries and try again!')
            return false;
        }        
    }

 
    render() {
        return (
            <div>
                <Nav mode={this.state.mode} onPageChange={this.pageChangeHandler} />
                <div className="card-container">
                    {
                        this.state.mode === 'logged in' ? 
                        <MembersArea /> : 
                        <LoginForm onLogin={this.loginHandler}/>
                    }
                </div>

                <footer>
                    <p>copyright 2018 &copy;</p>
                 </footer>
            </div>
        );
    }
}

export default App;
