const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { nombre, apellido, api_key } = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        apellido,
        api_key
    })
};

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id: id
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API -  controlador'
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
};