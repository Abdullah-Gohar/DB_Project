window.onload = review()

function review(){
    $.get("http://localhost:8080/getReviews",
        {
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




