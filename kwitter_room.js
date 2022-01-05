
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC2IKBz7AOz-kIdoLoHh8kS1rJGwd5tPiA",
      authDomain: "project-93-e01c2.firebaseapp.com",
      databaseURL: "https://project-93-e01c2-default-rtdb.firebaseio.com",
      projectId: "project-93-e01c2",
      storageBucket: "project-93-e01c2.appspot.com",
      messagingSenderId: "925503157996",
      appId: "1:925503157996:web:a63cbfb6f4eb2008c6d7c9",
      measurementId: "G-54EVE1EXTX"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     //End code
     });});}
getData();
