const firebaseConfig = {
      apiKey: "AIzaSyBYRz_DVIkhJXhP7FiWWMt94VkriBoqTUM",
      authDomain: "kwitter-projects-851b2.firebaseapp.com",
      databaseURL: "https://kwitter-projects-851b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-projects-851b2",
      storageBucket: "kwitter-projects-851b2.appspot.com",
      messagingSenderId: "972859016771",
      appId: "1:972859016771:web:db59a184ff902b668936f6"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      } });  }); }
getData();

function logout(){
      window.location = "index.html";

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}