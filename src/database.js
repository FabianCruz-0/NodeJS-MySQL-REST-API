const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
    //Base de datos del proyecto nodejs-mysql, si requieres los valores de la base de datos, mándame mensaje.
    //database of the project nodejs-mysql, if you need those key's, send me direct message.
});

mysqlconnection.connect(function (err)
{
    if(err)
    {
        console.log(err);
        return;
    }else{
        console.log("la base de datos está conectada");
    }

});
module.exports = mysqlconnection;