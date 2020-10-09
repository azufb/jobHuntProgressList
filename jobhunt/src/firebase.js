import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBxTDbY6GnFgAk7UIX6XPR7OEKqCJcXnSw",
    authDomain: "jobhuntingmanage.firebaseapp.com",
    databaseURL: "https://jobhuntingmanage.firebaseio.com",
    projectId: "jobhuntingmanage",
    storageBucket: "jobhuntingmanage.appspot.com",
    messagingSenderId: "246312386693",
    appId: "1:246312386693:web:160c351985543537ce69ec"
};

firebase.initializeApp(config);

export default firebase;