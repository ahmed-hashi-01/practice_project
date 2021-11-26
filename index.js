const express = require('express')
const cons = require('consolidate')
const dotenv = require('dotenv');
const app = express()
const route = require('./routes/admin.js')
dotenv.config({path: 'config.env'})
const connectDB = require ('./database/connection')
app.use(route)
app.engine('html', require('ejs').renderFile, cons.swig);
app.use(express.static(__dirname + "/public"));
// app.get('/', (req,res)=>{
//     res.render('admin/index')
// })

app.listen(3000, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Server Started At Port 3000 ");
    }
  });

  connectDB()

app.set("view engine", "ejs");
app.set('views', ['./views', './views/admin']);
app.set('view engine', 'html');
