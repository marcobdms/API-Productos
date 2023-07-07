'use strict';
const Fabricante = require('../models/fabricantes.model');
exports.findAll = function (req, res) {
    Fabricante.findAll(function (err, fabricante) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', fabricante);
        res.send(fabricante);
    });
};

exports.create = function (req, res) {
    const new_fabricante = new Fabricante(req.body);

    //handles null error

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Categoria.create(new_fabricante, function (err, fabricante) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Fabricante added successfully!", data: categoria });
        });
    }
};

exports.findById = function (req, res) {
    Categoria.findById(req.params.id, function (err, categoria) {
        if (err)
            res.send(err);
        res.json(categoria);
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Fabricante.update(req.params.id, new Fabricante(req.body), function (err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Fabricante successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    Fabricante.delete(req.params.id, function (err, fabricante) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Fabricante successfully deleted' });
    });
};