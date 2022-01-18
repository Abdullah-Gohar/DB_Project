const config = {
    user: 'mishal',
    password: '123',
    server: 'LAPTOP-3V03CSAF', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port: 1433,
    trustServerCertificate: true
}



async function getReviews() {
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
        result = await pool.request().query('Select C.ClientFirstName,C.ClientLastName,R.ReviewRating,R.ReviewComments from Client as C'
        +"inner join Review as R"
        +"on R.ClientID = C.ClientID")
        
        
        let reviews = []
        for(var i =0;i<4;i++){
            reviews[i]=result.recordsets[0][i]
        }
        sql.close()
        return review
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
        let data = await getReviews()
        console.log(data)
        res.send(data)
    })()
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port${port}`);
});





