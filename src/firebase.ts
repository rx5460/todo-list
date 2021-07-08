import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyBeJnQM4WBoNqZwthwEmTdd5r0FwXhjMFQ",
    authDomain: "my-todolist-app-76603.firebaseapp.com",
    projectId: "my-todolist-app-76603",
    storageBucket: "my-todolist-app-76603.appspot.com",
    messagingSenderId: "984153484166",
    appId: "1:984153484166:web:239d431f92a4a432251a07"
  }; 

  
  export default firebase.initializeApp(firebaseConfig);