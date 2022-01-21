window.onload=RefreshStats()


function bookService(SNo) {
        $.post("http://localhost:8080/bookService",
            {
                serviceNo: SNo,  ClientId: 2003
                
            },
            function (data, status) {
            });
    window.location.reload()


}

function bookFood(FoodPeople){

    $.post("http://localhost:8080/bookFood",
            {
                Food: FoodPeople,ClientId: 2003
            },
            function (data, status) {
            });

    window.location.reload()
}

function RefreshStats( ){

    
    $.get("http://localhost:8080/refreshStats?id=2003",
        function (data) {
           if(data.t){
            document.getElementById("TennisBookButton").style.display="none"
            document.getElementById("TennisBooked").style.display="inline-block"
           }

         if(data.b){
            document.getElementById("BowlingBookButton").style.display="none" 
            document.getElementById("BowlingBooked").style.display="inline-block"  
        }
        if(data.c){
            document.getElementById("MovieBookButton").style.display="none"
            document.getElementById("MovieBooked").style.display="inline-block"
        }
        if(data.f){
            document.getElementById("FoodBookButton").style.display="none"
            document.getElementById("FoodBooked").style.display="inline-block"
        }
        });

}

