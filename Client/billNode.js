 const config = {
    user: 'mishal',
    password: '123',
    server: 'LAPTOP-3V03CSAF', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
 }

// const config = {
//    user: 'admin',
//    password: '123',
//    server: 'DESKTOP-TA4RQON', // You can use 'localhost\\instance' to connect to named instance
//    database: 'Resort_DB',
//    port: 1433,
//    trustServerCertificate: true
// }



async function getBillInfo(id) {
    const sql = require('mssql')
    const { boolean } = require('webidl-conversions')


    sql.on('error', err => {
        console.log(err.message)
    })

    try {
        let pool = await sql.connect(config)
        let result
        
            // console.log("review")
        rooms_booked = (await pool.request().query("Select count(RoomNo) as totalRooms from Booking where ClientID = "+id)).recordset[0].totalRooms
        r = await (await pool.request().query("Select RoomNo as RNo from Booking where ClientID = "+id)).recordset
        rooms = []
        for(i = 0;i<r.length;i++){
            rooms[i]=r[i].RNo
        }
        //rooms_type = await (await pool.request().query("Select RoomNo as RNo from Booking where ClientID = "+id)).recordset 
        //rooms_price = await (await pool.request().query("Select RoomNo as RNo from Booking where ClientID = "+id)).recordset 

        //accomodation = await (await pool.request().query("Select RoomNo as RNo from Booking where ClientID = "+id)).recordset 
        food = await (await pool.request().query("Select FoodPrice*FoodPeople as totalFood from FoodReservation where ClientNo = "+id)).recordset
        tennis = await (await pool.request().query("select s.ServicePrice as sPrice from client as c inner join Orders as o on c.ClientID= o.clientid inner join service as s on o.serviceNo = s.ServiceNo where o.serviceNo=1 and c.ClientID= "+id)).recordset
        bowling = await (await pool.request().query("select s.ServicePrice as sPrice from client as c inner join Orders as o on c.ClientID= o.clientid inner join service as s on o.serviceNo = s.ServiceNo where o.serviceNo=2 and c.ClientID= "+id)).recordset
        cinema = await (await pool.request().query("select s.ServicePrice as sPrice from client as c inner join Orders as o on c.ClientID= o.clientid inner join service as s on o.serviceNo = s.ServiceNo where o.serviceNo=3 and c.ClientID= "+id)).recordset
        if(tennis.length>0){

            tennis = tennis[0].sPrice
        }
        else{
            tennis = "0"
        }
        if(food.length>0){
            food = food[0].totalFood
        }
        else{
            food = "0"
        }
        if(bowling.length>0){
            bowling = bowling[0].sPrice
        }
        else{
            bowling = "0"
        }
        if(cinema.length>0){
            cinema = cinema[0].sPrice
        }
        else{
            cinema = "0"
        }


        data = {rBooked:rooms_booked, roomsNo: rooms, sFood:food, sTennis:tennis, sBowling:bowling, sCinema:cinema }





        console.log(data)
        sql.close()
        return data
    } catch (err) {
        console.log(err.message)
        sql.close()
    }
}



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get('/getBillData', (req, res) => {
    (async () => {
        let data = await getBillInfo(req.query.id)
        // console.log(data)
        res.send(data)
    })()
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});





