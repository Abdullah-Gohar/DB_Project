const config = {
  user: 'admin1',
  password: '123',
  server: 'DESKTOP-IO2BR35',
  database: 'Resort_DB',
  port: 1433,
  trustServerCertificate: true
}
const http = require('http');
const { result } = require('lodash');
const sql = require('mssql');

//html string that will be send to browser
var reo = '<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';

async function setResHtml(sql, cb) {
  sql.on('error', err => {
    console.log(err.message)
  })

  try {
    let pool = await sql.connect(config)
    let result = await pool.request().query('Select * from Client  ')

    let table = ''; //to store html table
    table = '<table border="1"><tr><th>Nr.</th><th>ID</th><th>FirstName</th><th>LastName</th><th>PhoneNo</th><th>Gender</th>+<th>Email</th></tr></table>';
    //create html table with data from res.
    console.log(result.recordset[0].ClientID)
    for (var i = 0; i < result.recordsets.length; i++) {
      // console.log(result.recordsets)
      table +='<tr><td>'+ (i+1) +'</td><td>'+ result.recordset[i].ClientID +'</td><td>'+ result.recordset[i].ClientFirstName +'</td><td>'+ result.recordset[i].ClientLastName +'</td><td>'+ result.recordset[i].PhoneNo +'</td><td>'+ result.recordset[i].Gender +'</td><td>'+ result.recordset[i].Email +'</td></tr>';

    }
    // console.log(table)
    sql.close()
       return cb(table);

  } catch (err) {
    console.log("Error: "+err.message)
    sql.close()
  }
}







//create the server for browser access
const server = http.createServer((req, res) => {
  setResHtml(sql, resql => {
   reo = reo.replace('{${table}}', resql);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(reo, 'utf-8');
    res.end();
  });
});

server.listen(8080, () => {
  console.log('Server running at //localhost:8080/');
});

// async function getUsers(){
//   const config = {
//   user: 'admin1',
//   password: '123',
//   server: 'DESKTOP-IO2BR35', // You can use 'localhost\\instance' to connect to named instance
//   database: 'Resort_DB',
//   port:1433,
//   trustServerCertificate: true
// }

//   const { result } = require('lodash');
//   const sql = require('mssql')
  
      
//   sql.on('error', err => {
//       console.log(err.message)
//   })
 

//   try {
     
//       let pool = await sql.connect(config)
     
//     //  let insertion = await pool.request().query("Insert into Users values("+x+",'password','Guy68')")
//       let result = await pool.request().query('Select * from Client ')
//       console.log(result)
//       sql.close()
//   }catch(err){
//       console.log(err.message)
//       sql.close()

//   }

// }


// getUsers();

