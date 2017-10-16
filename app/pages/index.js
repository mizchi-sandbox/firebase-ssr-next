import App from '../components/App'
// import * as firebase from 'firebase'
const firebase = require('firebase')

global.firebase = firebase

export default () => (
  <App>
    <p>Index Page 2</p>
  </App>
)
