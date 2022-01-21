const config = {
    user: 'admin',
    password: '123',
    server: 'DESKTOP-TA4RQON', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
}



async function bookService(SNo,ClientId) {
    const sql = require('mssql')
    const { boolean } = require('webidl-conversions')


    sql.on('error', err => {
        console.log(err.message)
    })

    try {
        let pool = await sql.connect(config)
        console.log("Insert into Orders values ("+ClientId+"  ,"+ SNo+")")

        await pool.request().query("Insert into Orders values ("+ClientId+"  ,"+ SNo+")")
        sql.close()
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
app.post('/bookService', (req, res) => {
    (async () => {
        console.log("SNO: "+req.body.SNo)
        await bookService(req.body.serviceNo, req.body.ClientId)
        // console.log(data)
    })()
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});
