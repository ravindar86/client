import React from "react";

class GoogleAuth extends React.Component{
    
    state = {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '959103917219-jgeumbjppk9l4fd48p3leorb4qhep06m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn===null) {
            return <div></div>;
        }else if(this.state.isSignedIn) {
            return <div>Sign Out</div>;
        }else{
            return <div>Sign In</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;