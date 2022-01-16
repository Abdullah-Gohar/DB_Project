

function submit(){
    console.log("in function")
    $.post("http://localhost:8080/checkUser",
        {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        },
        function (data, status) {
            // console.log(data.state + "   " + status)
            // window.alert(data.state + "   "+ status)
            if (data.state) {
                window.location.href = "../Client/client_home.html"
            }
            else {
                // window.alert("Invalid Data")
                document.getElementById("invalid-text").style.display = "block";
            }
        });
    

}




