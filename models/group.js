//to get the database model
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({

//columns, properties of the schema

    GName:{
        type : String,
        required:true
    },
 
    student1:{
        type : String,
        required:true
    },
    student2:{
        type : String,
        required:true
    },
    student3:{
        type : String,
        required:true
    },
    student4:{
        type : String,
        required:true
    },
    Leader:{
        type : String,
        required:true
    }
  
    
});

module.exports = mongoose.model('Groups', groupSchema)