
function bookService(SNo) {
        $.post("http://localhost:8080/bookService",
            {
                serviceNo: SNo,  ClientId: 300
            },
            function (data, status) {

            });


}

function bookFood(FoodPeople){

    $.post("http://localhost:8080/bookFood",
            {
                Food: FoodPeople,ClientId: 300
            },
            function (data, status) {

            });

}
