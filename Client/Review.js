function validate(){
    comments=  document.getElementById("comments").value
    stars=  $('input[name=star]:checked').val()
    window.alert(comments + " : " + stars + (!comments || !stars))
    if(!comments || !stars){
        document.getElementById("Error-Text").style.display="block"
        return false
    }

    return true
}

function submit_data() {
    console.log("Function Call")
    window.alert("Func Call")
    if(validate()){

        $.post("http://localhost:8080/submitReview",
            {
                // id: sessionStorage.getItem(id),
                id: 456,
                comments: document.getElementById("comments").value,
                stars: $('input[name=star]:checked').val()
            },
            function (data, status) {
                window.location.href = "client_home.html"
            }
        );
    }


}
