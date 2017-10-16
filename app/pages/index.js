import React from 'react'
import App from '../components/App'
import clientCredentials from '../clientCredentials'
// import * as firebase from 'firebase'
const firebase = require('firebase')

global.firebase = firebase

export default class Index extends React.Component {
  componentDidMount() {
    const firebaseui = require('firebaseui')
    firebase.initializeApp(clientCredentials)
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('.firebaseui-auth-container', uiConfig)
  }
  render() {
    return (
      <App>
        <p>Index Page</p>
        <div className="firebaseui-auth-container" />
      </App>
    )
  }
}
