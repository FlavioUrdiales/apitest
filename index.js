

// crear cocnexion a mysql en local host con el peurto 3307 con usuario root y contrasenia root
var mysql = require('mysql');
var express = require('express');
//        $link = new PDO("mysql:host=unimundial.edu.mx;dbname=wwunim_sci", "wwunim_sci", "Cy4?K6,L0kZu" , array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

var connection = mysql.createConnection({
    host: 'unimundial.edu.mx',
    user: 'wwunim_sci',
    password: 'Cy4?K6,L0kZu',
    database: 'wwunim_sci',
    port: 3306
});

var app = express();

app.get('/servicios', function(req, res) {
    var query = connection.query('SELECT * FROM tbl_biblioteca', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    }
    );
});

app.post('/servicios/:tabla', function(req, res) {
    var query = connection.query('INSERT INTO ? SET ?', [req.params.tabla, req.body], function(err, rows, fields) {
        if (err) throw err;
        res.json(result);
    });
});


app.put('/servicios/:id', function(req, res) {
    var query = connection.query('UPDATE prueba SET ? WHERE id = ?', [req.body, req.params.id], function(err, result) {
        if (err) throw err;
        res.json(result);
    }
    );

});


app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');

  connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

});
