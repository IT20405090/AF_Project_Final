//to create the server we want to run our application 
const express = require('express');

//to communicate with the database
const mongoose = require('mongoose');

//converts the json request to a js object(as the json format cannot be understood by the server)
const bodyParser = require('body-parser');

//CORS node.js package provides a connect/ middleware that can be used to enable CORS with various options 
const cors = require('cors');

//invoke the server (server- express application)
const app = express()


//import routes
const topicRoutes = require('./routes/topics');
const groupRoutes = require('./routes/group');

//middleware of the app 
app.use(bodyParser.json());

//uses CORS as a middleware
app.use(cors());

//middleware of the route
app.use(topicRoutes);
app.use(groupRoutes);

//declaring the PORT
const PORT = 8000;

//variable for the URL
const  DB_URL = 'mongodb+srv://rv:rv123@mernapp.9s5az.mongodb.net/ResearchTopics?retryWrites=true&w=majority'
mongoose.connect(DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
//if the promise is success
.then(() => {
    console.log('DB Connected');
})
//if it is unsuccessful
.catch((error) => console.log('DB Connection error', err));

//listening the running PORT
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

//create the database connection

