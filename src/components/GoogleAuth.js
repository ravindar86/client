import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

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

    onAuthChange = isSignedIn => {
      // this.setState({isSignedIn: this.auth.isSignedIn.get()});
       if(isSignedIn) {
           this.props.signIn();
       }
       else{
           this.props.signOut();
       }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        console.log(this.state.isSignedIn);
        if(this.state.isSignedIn===null) {
            return null;
        }else if(this.state.isSignedIn) {
            return <div>
                <button onClick={this.onSignOutClick} className="ui blue google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            </div>;
        }else{
            return <div>
                <button onClick={this.onSignInClick} className="ui blue google button">
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

export default connect(null,{signIn, signOut})(GoogleAuth);