import React, { Component } from 'react';


class MembersArea extends Component {
    
    render() {
        return (
            <div className="row card members-area">
                <div class="member-msg">
                    <h1>You have now logged in successfully</h1>
                    <p>please refresh this page to "log out"</p>
                </div> 
            </div>
        );
    }
}

export default MembersArea;