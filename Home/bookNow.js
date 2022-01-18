

function submit() {

    // let first_name = document.getElementById("FName").value
    // let last_name =  document.getElementById("LName").value
    // let gender = $('input[name=Gender]:checked').val()

    // window.alert(first_name+ " : "+last_name + " : " +gender)
    $.post("http://localhost:8080/bookData",
        {
            first_name : document.getElementById("FName").value,
            last_name: document.getElementById("LName").value,
            gender: $('input[name=Gender]:checked').val(),
        },
        function (data, status) {
            // console.log(data.state + "   " + status)
            // window.alert(data.state + "   "+ status)
            if (data.state) {
                if (document.getElementById("client").checked) {
                    window.location.href = "../Client/client_home.html"
                }
                else {
                    window.location.href = "../Admin/adminHome.html"
                }
            }
            else {
                // window.alert("Invalid Data")
                document.getElementById("invalid-text").style.display = "block";
            }
        });


}




