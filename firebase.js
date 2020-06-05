import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC0DRL7lCaG5GN_LgkkfcPWTO1zy98N4J4",
    authDomain: "nookinc-db969.firebaseapp.com",
    databaseURL: "https://nookinc-db969.firebaseio.com",
    projectId: "nookinc-db969",
    storageBucket: "nookinc-db969.appspot.com",
    messagingSenderId: "359221217197",
    appId: "1:359221217197:web:fdd9629efc0a6d78e64324",
    measurementId: "G-PB7144MKL4"
};
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
