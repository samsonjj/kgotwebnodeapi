var brother = require('../models/brotherListModel');
var mysql = require('mysql');

const dbHostName = kgotawsdatabase.cvvvgjkf3mzt.us-east-2.rds.amazonaws.com;
const dbPort = 3306;
const dbUsername = "kgotweb";
const dbPassword = "Spartan117!";
const dbName = "otbrother";

var con = mysql.createConnection({
	host: dbHostName,
	port: dbPort,
	user: dbUsername,
	password: dbPassword,
	database: dbName
})

con.connect(function(err) {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('connected');
});

exports.list_active_brothers = function(req, res) {
	con.query("select * from Brothers where active = 1", function(err, result) {
		if (err) throw err;
		res.send(result);
	});
}

exports.list_all_brothers = function(req, res) {
	con.query("select * from Brothers", function(err, result) {
		if (err) throw err;
		res.send(result);
	});
}

exports.create_a_brother = function(req, res) {
	res.send('create_a_brother');
}

exports.read_a_brother = function(req, res) {
	con.query("select * from Brothers where roll = " + req.params.rollNumber, function(err, result) {
		if (err) throw err;
		res.send(result);
	});
}

exports.update_a_brother = function(req, res) {
	res.send('update_a_brother');	
}

exports.delete_a_brother = function(req, res) {
	res.send('delete_a_brother');
}