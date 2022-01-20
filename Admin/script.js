window.onload = getData();


function getData(){ 
  $.get("http://localhost:8080/getBookings",
            function (data) {
              var xValues = ["Room1", "Room2", "Room3", "Room4", "Room5","Room6","Room7","Room8","Room9","Room10","Room11","Room12","Room13","Room14","Room15","Room16","Room17"]
              var yValues = [data.r1,data.r2, data.r3, data.r4, data.r5,data.r6,data.r7,data.r8,data.r9,data.r10,data.r11,data.r12,data.r13,data.r14,data.r15,data.r16,data.r17];
            
              
              new Chart("myChart", {
                type: "bar",
                data: {
                  labels: xValues,
                  datasets: [{
                    backgroundColor: "cadetblue",
                    data: yValues
                  }]
                },
                options: {
                  legend: {display: false},
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                  title: {
                    display: true,
                    text: "No of Bookings this Month"
                  }
                  
                }
              });
            });
          }




 function getDataRoom(id){ 
              let content  = document.getElementById(id)
            $.get("http://localhost:8080/getRoom?id="+id,
            function (data) {
              if(id == "1"){
                if(content.innerHTML == "Room 1"){
                  content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                }
                else {
                  content.innerHTML = "Room 1";
                }
               }
               else if(id == "2"){
                if(content.innerHTML == "Room 2"){
                  content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                }
                else {
                  content.innerHTML = "Room 2";
                }
               }
                if(id == "3"){
                 if(content.innerHTML == "Room 3"){
                 content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                   }
              else {
               content.innerHTML = "Room 3";
                 }
                }
                if(id == "4"){
                  if(content.innerHTML == "Room 4"){
                    content.innerHTML=  "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 4";
                  }
                }
                if(id == "5"){  
                  if(content.innerHTML == "Room 5"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 5";
                  }
                }
                if(id == "6"){
                  if(content.innerHTML == "Room 6"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 6";
                  }
                }
                if(id == "7"){
                  if(content.innerHTML == "Room 7"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 7";
                  }
                }
                if(id == "8"){
                  if(content.innerHTML == "Room 8"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 8";
                  }
                }
                if(id == "9"){
                  if(content.innerHTML == "Room 9"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 9";
                  }
                }
                if(id == "10"){
                  if(content.innerHTML == "Room 10"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 10";
                  }
                }
                if(id == "11"){
                  if(content.innerHTML == "Room 11"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 11";
                  }
                }
                if(id == "12"){
                  if(content.innerHTML == "Room 12"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 12";
                  }
                }
                if(id == "13"){
                  if(content.innerHTML == "Room 13"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 13";
                  }
                }
                if(id == "14"){
                  if(content.innerHTML == "Room 14"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 14";
                  }
                }
                if(id == "15"){
                  if(content.innerHTML == "Room 15"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 15";
                  }
                }
                if(id == "16"){
                  if(content.innerHTML == "Room 16"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 16";
                  }
                }
              
                if(id == "17"){
                  if(content.innerHTML == "Room 17"){
                    content.innerHTML= "Status :" + data.rS +"<br>Rating :"+ data.rR;
                  }
                  else {
                    content.innerHTML = "Room 17";
                  }
                }
      




            })
          }






function toggleEco() {
    document.getElementById("dropdownEco").classList.toggle("show");
  }
  function toggleLux() {
    document.getElementById("dropdownLux").classList.toggle("show");
  }
  function toggleSuite() {
    document.getElementById("dropdownSuite").classList.toggle("show");
  }
  function togglePh() {
    document.getElementById("dropdownPh").classList.toggle("show");
  }
  
  function graph(){
    var xValues = ["Room1", "Room2", "Room3", "Room4", "Room5","Room6","Room7","Room8","Room9","Room10","Room11","Room12","Room13","Room14","Room15","Room16","Room17"]
    var yValues = [10,2, 3, 24, 13,14,17,1,3,5,1,6,11,12,17,12,3];
  
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: "cadetblue",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "No of Bookings this Month"
        }
      }
    });
  }

  
