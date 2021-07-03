function login(){
    localStorage.setItem("login_name", document.getElementById("username").value)
    window.location = "kwitter-room.html";
}