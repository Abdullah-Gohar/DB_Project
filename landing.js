

function submit(){
    $.post("http://localhost:8080/checkReviews",
        {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            radio: document.getElementById("client").checked
        },
        function (data, status) {
            // console.log(data.state + "   " + status)
            // window.alert(data.state + "   "+ status)
            if (data.state) {
                if (document.getElementById("client").checked){
                    window.location.href = "../Client/client_home.html"
                }
                else{
                    window.location.href = "../Admin/adminHome.html"
                }
            }
            else {
                // window.alert("Invalid Data")
                document.getElementById("invalid-text").style.display = "block";
            }
        });
    

}




