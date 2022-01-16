const config = {
    user: 'admin',
    password: '123',
    server: 'DESKTOP-TA4RQON', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
}



async function checkUser(name, pass) {
    const sql = require('mssql')
    const { boolean } = require('webidl-conversions')


    sql.on('error', err => {
        console.log(err.message)
    })

    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query('Select UserName,Pass from Users inner join Client on Users.UserID = Client.ClientID' +
            " where UserName = '" + name + "' and Pass = '" + pass + "'")
        var flag = false
        if (result.recordsets[0].length != 0) {
            var flag = true
        }
        console.log(result.recordsets[0].length)
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
app.post('/checkUser', (req, res) => {
    (async () => {
        let flag = await checkUser(req.body.username, req.body.password)
        console.log(req.body)
        res.send({state:flag})
        // if (flag) {
        //     window.location.href = "Landing.html"
        // }
        // else {
        //     window.alert("Invalid Data")
        //     document.getElementById("invalid-text").style.display = "block";
        // }
    })()
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});





