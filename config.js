import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAn5-VXk8g7JFkq6-B1LrQHpRDlYg86wBE",
    authDomain: "voting-app-324b5.firebaseapp.com",
    databaseURL: "https://voting-app-324b5-default-rtdb.firebaseio.com",
    projectId: "voting-app-324b5",
    storageBucket: "voting-app-324b5.appspot.com",
    messagingSenderId: "671279162460",
    appId: "1:671279162460:web:2e71ab92cce94788083299"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();