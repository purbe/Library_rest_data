
var mysql = require('mysql');

var DBNAME= "library_data"

var con = mysql.createConnection({
  host: "localhost",
  user: "nutan",
  password: "123456789",
  database: DBNAME,
});





function connect() {
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
            if (err) reject(err);
            resolve(`Connected to database ${DBNAME}!`);
          });
    })
}


function query(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
            };
            resolve(result)
          });
    })
}


module.exports= {
    "connect": connect,
    query,
}


/*
// Exapmles.... how to use...

connect()
.then(msg => {
    console.log(msg);
    return query("SELECT * FROM students");
})
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err);
})
*/