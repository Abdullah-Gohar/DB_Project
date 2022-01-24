window.onload = getBillInfo()
function displayBill()
{
    document.getElementById("Bill").style.display="block";
    document.getElementById("checkout").style.display="none";
}
function getBillInfo() { 
    window.alert("hello")
    $.get("http://localhost:8080/getBillData?id=123",
    {
    },
    function (data, status) {

        document.getElementById("RoomPrice").innerHTML = data.room_price

        document.getElementById("RoomsBooked").innerHTML = data.rBooked
        r = data.roomsNo
            rooms = r[0]
            for(i = 1;i<r.length;i++){
                rooms+=r[i]+", "
            }

        document.getElementById("RoomNo").innerHTML = rooms
        document.getElementById("Food").innerHTML = data.sFood
        document.getElementById("Tennis").innerHTML = data.sTennis
        document.getElementById("Bowling").innerHTML = data.sBowling
        document.getElementById("Movies").innerHTML = data.sCinema
        document.getElementById("RoomType").innerHTML = data.roomFloor

    });

}
