//Server Instantiate
const express = require('express');
const app = express();

//Used to parese req.body in express -> PUT or POST
const bodyParser = require('body-parser');


//Specifically parse JSON data & add it to the rquest.Body object
app.use(bodyParser.json());

//Activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server started at port no. 3000");
});

//Routes
app.get('/', (request, response) => {
    response.send("hello , how are you");
})

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully")
}) 


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})

.then(() => {console.log("Connection Successfull")})
.catch( (error) => {console.log("Recieved an error")});