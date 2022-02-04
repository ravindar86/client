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
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn===null) {
            return null;
        }else if(this.state.isSignedIn) {
            return <div>
                <button onClick={this.onSignOut} className="ui blue google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            </div>;
        }else{
            return <div>
                <button onClick={this.onSignIn} className="ui blue google button">
                    <i className="google icon"></i>
                    Sign In With Google
                </button>
            </div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;