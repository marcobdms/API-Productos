'use strict';
var dbConn = require('./../../config/db.config');

//Employee object create

var Fabricante = function (fabricante) {
    this.Nombre = fabricante.Nombre;
};

Fabricante.create = function (newFab, result) {
    dbConn.query("INSERT INTO fabricantes set ?", newFab, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Fabricante.findById = function (id, result) {
    dbConn.query("Select * from fabricantes where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Fabricante.findAll = function (result) {
    dbConn.query("Select * from fabricantes", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('fabricantes : ', res);
            result(null, res);
        }
    });
};

Fabricante.update = function (id, fabricante, result) {
    dbConn.query("UPDATE fabricantes SET nombre=? WHERE id = ?", [fabricante.Nombre, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Fabricante.delete = function (id, result) {
    dbConn.query("DELETE FROM fabricantes WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Fabricante;