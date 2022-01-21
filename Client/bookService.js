
function bookService(SNo) {
        $.post("http://localhost:8080/bookService",
            {
                serviceNo: SNo,  ClientId: 300
                
            },
            function (data, status) {

            });


}

