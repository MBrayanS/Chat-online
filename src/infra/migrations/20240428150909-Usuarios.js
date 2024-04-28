'use strict';
/** @type {import('sequelize-cli').Migration} */

const UsuarioAtributosModel = require('../databases/models/UsuarioModel')

module.exports = {
    async up ( queryInterface, Sequelize ) {
        const atributosModel = UsuarioAtributosModel(Sequelize)

        await queryInterface.createTable('Usuarios', atributosModel)
    },
    async down ( queryInterface ) {
        await queryInterface.dropTable('Usuarios')
    }
};
