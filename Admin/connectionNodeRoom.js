const config = {
    user: 'admin1',
    password: '123',
    server: 'DESKTOP-IO2BR35',
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
  }
  

async function getBookings() {
  const sql = require('mssql')
  const { boolean } = require('webidl-conversions')


  sql.on('error', err => {
      console.log(err.message)
  })
  try {
    let pool = await sql.connect(config)

    booked1 = await pool.request().query('SELECT COUNT(b.RoomNo) as no1 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 1')
    booked2= await pool.request().query('SELECT COUNT(b.RoomNo) as no2 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 2')
    booked3 = await pool.request().query('SELECT COUNT(b.RoomNo) as no3 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 3')
    booked4 = await pool.request().query('SELECT COUNT(b.RoomNo) as no4 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 4')
    booked5 = await pool.request().query('SELECT COUNT(b.RoomNo) as no5 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 5')
    booked6 = await pool.request().query('SELECT COUNT(b.RoomNo) as no6 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 6 ')
    booked7 = await pool.request().query('SELECT COUNT(b.RoomNo) as no7 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 7')
    booked8 = await pool.request().query('SELECT COUNT(b.RoomNo) as no8 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 8')
    booked9 = await pool.request().query('SELECT COUNT(b.RoomNo) as no9 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 9')
    booked10 = await pool.request().query('SELECT COUNT(b.RoomNo) as no10 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 10')
    booked11 = await pool.request().query('SELECT COUNT(b.RoomNo) as no11 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 11')
    booked12 = await pool.request().query('SELECT COUNT(b.RoomNo) as no12 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 12')
    booked13 = await pool.request().query('SELECT COUNT(b.RoomNo) as no13 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 13')
    booked14 = await pool.request().query('SELECT COUNT(b.RoomNo) as no14 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 14')
    booked15 = await pool.request().query('SELECT COUNT(b.RoomNo) as no15 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 15')
    booked16 = await pool.request().query('SELECT COUNT(b.RoomNo) as no16 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 16')
    booked17 = await pool.request().query('SELECT COUNT(b.RoomNo) as no17 FROM Booking as b inner join Room as r on r.RoomNo = b.RoomNo WHERE Month(b.CheckInDate) = Month(GETDATE()) AND YEAR(b.CheckInDate) = YEAR(GETDATE()) AND r.RoomNo = 17')
    

    booked1Result= booked1.recordset[0].no1
    booked2Result =  booked2.recordset[0].no2
    booked3Result =  booked3.recordset[0].no3
    booked4Result = booked4.recordset[0].no4
    booked5Result = booked5.recordset[0].no5
    booked6Result = booked6.recordset[0].no6
    booked7Result = booked7.recordset[0].no7
    booked8Result = booked8.recordset[0].no8
    booked9Result = booked9.recordset[0].no9
    booked10Result = booked10.recordset[0].no10
    booked11Result = booked11.recordset[0].no11
    booked12Result = booked12.recordset[0].no12
    booked13Result = booked13.recordset[0].no13
    booked14Result = booked14.recordset[0].no14
    booked15Result = booked15.recordset[0].no15
    booked16Result = booked16.recordset[0].no16
    booked17Result = booked17.recordset[0].no17
    final = {r1 : booked1Result , r2 : booked2Result,r3 : booked3Result,r4 : booked4Result,r5 : booked5Result,
        r6 : booked6Result,r7 : booked7Result,r8 : booked8Result,r9 : booked9Result,r10 : booked10Result,
        r11 : booked11Result,r12 : booked12Result,r13 : booked13Result,r14 : booked14Result,r15 : booked15Result,
        r16 : booked16Result,r17 : booked17Result}
    sql.close()
    return final
} catch (err) {
    console.log(err.message)
    sql.close()
}
}

async function getRoom(id){
        const sql = require('mssql')
  const { boolean } = require('webidl-conversions')


  sql.on('error', err => {
      console.log(err.message)
  })
  try {
    let pool = await sql.connect(config)
    roomState = await pool.request().query('select RoomState from Room as State WHERE RoomNo ='+id)
    roomRating = await pool.request().query(' SELECT Cast(AVG(Cast((R.ReviewRating) as Decimal(3,2))) as Decimal(3,2)) as rating FROM Review as R INNER JOIN Booking as B  on R.ClientID = B.ClientID  WHERE B.RoomNo = '+id+'Group BY RoomNo')
   // console.log(roomState.recordset[0].State);
    let roomStateSpan = '';
    let roomRatingResult = '';
    if(roomState.recordset[0].State == 1){
        roomStateSpan = '<span>Booked</span>'
     
    }
    else{
        roomStateSpan = '<span>Free</span>'
    }
    roomRatingResult = '<span>'+roomRating.recordset[0].rating+'</span>'
    final = {
        rS : roomStateSpan , rR : roomRatingResult
    }
    return final

}
catch (err) {
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
app.get('/getBookings', (req, res) => {
    (async () => {
       
        let result = await getBookings()
         //let value ='';
        // let moreValue ='';
        //  console.log(result.recordset[0].freeRoom)
        //  console.log(moreResult.recordset[0].bookedRoom)
        //   value= '<span>'+result.recordset[0].freeRoom+'</span>'
        // moreValue = '<span>'+moreResult.recordset[0].bookedRoom+'</span>'
          res.send(result)
      })()
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get('/getRoom' , (req, res) => {
    (async () => {
        let result = await getRoom(req.query.id)
         //let value ='';
        // let moreValue ='';
        //  console.log(result.recordset[0].freeRoom)
        //  console.log(moreResult.recordset[0].bookedRoom)
        //  console.log(moreResult.recordset[0].bookedRoom)
        //   value= '<span>'+result.recordset[0].freeRoom+'</span>'
        // moreValue = '<span>'+moreResult.recordset[0].bookedRoom+'</span>'
          res.send(result)
      })()
});


const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});