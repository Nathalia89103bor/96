const firebaseConfig = {
    apiKey: "AIzaSyDopWjna4jgBTkUusuZU3pbwy3waFXwqr0",
    authDomain: "kwitter-project-f4914.firebaseapp.com",
    databaseURL: "https://kwitter-project-f4914-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f4914",
    storageBucket: "kwitter-project-f4914.appspot.com",
    messagingSenderId: "164400513271",
    appId: "1:164400513271:web:5ec9dd062d1b02b734d3f2",
    measurementId: "G-138L4TV7BH"
  };
  
  // Initialize Firebase
  

  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  
 
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }
  