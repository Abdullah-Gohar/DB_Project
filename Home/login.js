

function submit(){
    console.log("in function")
    $.post("http://localhost:8080/checkUser",
        {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        },
        function (data, status) {
            console.log(data + "   " + status)
            window.alert(data + "   "+ status)
            if (status!=200) {
                window.location.href = "Landing.html"
            }
            else {
                window.alert("Invalid Data")
                document.getElementById("invalid-text").style.display = "block";
            }
        });
    

}




