import React from "react";

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '959103917219-jgeumbjppk9l4fd48p3leorb4qhep06m.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>;
    }
}

export default GoogleAuth;