const express = require('express');
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json()); //Si se recibe un json, el modulo de express lo podrá entender.

//Routes
app.use(require('./Routes/employees'));


//Initializing
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});