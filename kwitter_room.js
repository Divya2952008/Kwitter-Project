var firebaseConfig = {
    apiKey: "AIzaSyDx1MZ4QW_IO9smjLJuAYdDIhEP0pbC5to",
    authDomain: "kwitter-app-cbf31.firebaseapp.com",
    databaseURL: "https://kwitter-app-cbf31.firebaseio.com",
    projectId: "kwitter-app-cbf31",
    storageBucket: "kwitter-app-cbf31.appspot.com",
    messagingSenderId: "233702686590",
    appId: "1:233702686590:web:20c33ea823848bf3c27d2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  
  function add_room(){
  room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });

   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("room name-"+Room_names);
    row="<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;});});}

getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}



