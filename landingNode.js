const config = {
    user: 'mishal',
    password: '123',
    server: 'LAPTOP-3V03CSAF', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
}



async function checkReviews(UserName,stars,UserReviews) {
    const sql = require('mssql')
    const { boolean } = require('webidl-conversions')


    sql.on('error', err => {
        console.log(err.message)
    })

    try {
        console.log("checkReviews: "+UserName+" : "+stars+" : "+UserReviews)
        let pool = await sql.connect(config)
        let result
        
            console.log("review")
            result = await pool.request().query('Select u.UserName, r.ReviewRating, r.ReviewComments from Users as u inner join Client as c on u.UserID = c.ClientID inner join Review as r on c.ClientId=r.ClientId' +
                " where r.ReviewNo = 100")
        
        
        var flag = false
        console.log(result.recordsets[0][0].UserName)
        if (result.recordsets[0].length != 0) {
            var flag = true
        }
        sql.close()
        return flag
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
app.post('/checkReviews', (req, res) => {
    (async () => {
        let flag = await checkReviews(req.body.Slot1.UserName, req.body.Slot1.stars,req.body.Slot1.UserReviews)
        res.send({state:flag})
    })()
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});





