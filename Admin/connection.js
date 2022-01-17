function getData(){ 
  $.get("http://localhost:8080/getUsers",
            function (data) {
                document.getElementById("table").innerHTML = data;
            });
}