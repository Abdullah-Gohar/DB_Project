

function submit(){
    let name = document.getElementById("username").value
    let pass = document.getElementById("password").value
    // window.alert(name+" : "+pass)
    let flag = false;
    (async () => {
        flag = await checkUser(name, pass)
        if(flag){
            window.location.href="Landing.html"
        }
        else{
            window.alert("Invalid Data")
            document.getElementById("invalid-text").style.display = "block";
        }
    })()

}




