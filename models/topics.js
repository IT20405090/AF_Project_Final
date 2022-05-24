//to get the database model
const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({

//columns, properties of the schema

    Area:{
        type : String,
        required:true
    },
 
    Topic:{
        type : String,
        required:true
    },
    Supervisors:{
        type : String,
        required:true
    },
    CoSupervisors:{
        type : String,
        required:true
    },
    GroupName:{
        type : String,
        required:true
    },
    Leader:{
        type : String,
        required:true
    },
    SState:{
        type : String,
        required:true
    },
    CState:{
        type : String,
        required:true
    },
    Comments:{
        type : String,
        required:true
    }
    
  
    
});

module.exports = mongoose.model('Topics', topicSchema)