const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://hiralmail:60ehYtVX6zJXiNZP@default.u6ad6.mongodb.net/bookMyShow?retryWrites=true&w=majority');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;