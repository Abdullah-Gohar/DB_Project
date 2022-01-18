window.onload = getData()

function getData(){ 
    $.get("http://localhost:8080/getAdminStats",
              function (data) {
                  document.getElementById("freeRooms").innerHTML = data.fv;
                  document.getElementById("bookedRooms").innerHTML = data.bv;
                  document.getElementById("avgRating").innerHTML = data.av;
                  document.getElementById("noOfCustomers").innerHTML = data.btv;
                  document.getElementById("services").innerHTML = data.sv;
                  document.getElementById("avgRatingmonth").innerHTML = data.arv;
              });
            }
