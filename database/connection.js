const mongoose = require ("mongoose");
require('dotenv').config();
const connectDB = async ()=>{
    try{
      // mongo db connection string
      //const con = await mongoose.connect(process.env.MONGO_URI
      const con = await mongoose.connect('mongodb+srv://admin:admin_123@cluster0.7jhhw.mongodb.net/Users?retryWrites=true&w=majority'
    //     {
          
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       useFindAndModify: false,
    //       useCreateIndex: true
    //   }
      )
      console.log(`MongoDB connected:${con.connection.host}`)
    }
    catch(err){
     console.log(err)
     process.exit(1);
    }
}
module.exports = connectDB