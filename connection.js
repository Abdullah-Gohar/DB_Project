const config = {
    user: 'admin1',
    password: '123',
    server: 'DESKTOP-IO2BR35', // You can use 'localhost\\instance' to connect to named instance
    database: 'Resort_DB',
    port:1433,
    trustServerCertificate: true
}
const sql = require('mssql')

    
sql.on('error', err => {
    console.log(err.message)
})
async function getUsers(){
    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query('Select * from Users where UserID =63')
        console.log(result.recordset[0])
        sql.close()
    }catch(err){
        console.log(err.message)
        sql.close()
    }
}

getUsers()