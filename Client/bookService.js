
function bookService(SNo) {
        $.post("http://localhost:8080/bookService",
            {
                serviceNo: SNo,  ClientId: 2003
                
            },
            function (data, status) {

            });


}

