var brother = require('../models/brotherListModel');
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "kgotawsdatabase.cvvvgjkf3mzt.us-east-2.rds.amazonaws.com",
	port: 3306,
	user: "kgotweb",
	password: "Spartan117!",
	database: "otbrother"
})

con.connect(function(err) {
	if(err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('connected');
});

exports.list_all_brothers = function(req, res) {
	/*
	res.send({
		rollNumber : 250,
		firstName : 'Jonathan',
		lastName : 'Samson'
	});
	*/
	con.query("select * from Brothers", function(err, result) {
		if (err) throw err;
		res.send(result);
	});
}

exports.create_a_brother = function(req, res) {
	res.send('create_a_brother');
}

exports.read_a_brother = function(req, res) {
	res.send('read_a_brother');
}

exports.update_a_brother = function(req, res) {
	res.send('update_a_brother');	
}

exports.delete_a_brother = function(req, res) {
	res.send('delete_a_brother');
}