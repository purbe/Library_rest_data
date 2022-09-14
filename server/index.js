const express = require('express')
const cors = require('cors');



const app = express()

const PORT = 3000;



db= require("./connect_to_db")
db.connect()
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log("Unable to connect to database...");
})



app.use(cors())

app.get('/', (req, res) => {
  res.send('Running Node Server!')
})


app.get("/students", (req, res) => {

    const q= "SELECT fname, lname FROM students";
    
    db.query(q)
    .then(r => {
        res.send(r);
       // res.render('home', {r: r});
    })
    .catch(err => {
        res.send("Some error occured... please recheck the database.");
    }) 

})


app.get("/only_books", (req, res) => {

    const q= "SELECT name, auth_name FROM books";
    
    db.query(q)
    .then(r => {
        res.send(r);
    })
    .catch(err => {
        res.send("Some error occured... please recheck the database.");
    }) 

})

app.get("/books", (req, res) => {

    const q= "SELECT * FROM borrowed AS borrowed INNER JOIN students AS s RIGHT OUTER JOIN books AS b ON borrowed.b_id=b.id AND borrowed.s_id=s.id";
    
    db.query(q)
    .then(r => {
        res.send(r);
    })
    .catch(err => {
        res.send("Some error occured... please recheck the database.");
    }) 

})



app.listen(PORT, () => {
  console.log(`Started server on port: ${PORT}`)
})