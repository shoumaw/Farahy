import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPy71UBA75u3nHgfl4DvAOBu8Ckg1MZ8w",
  authDomain: "farahy-ad87a.firebaseapp.com",
  databaseURL: "https://farahy-ad87a.firebaseio.com",
  projectId: "farahy-ad87a",
  storageBucket: "farahy-ad87a.appspot.com",
  messagingSenderId: "1072114452677"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 