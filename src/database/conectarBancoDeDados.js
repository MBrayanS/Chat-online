const sequelize = require("./sequelize");

require('../models/ContatoEntity')
require('../models/GrupoEntity')
require('../models/MembroEntity')
require('../models/MensagemEntity')
require('../models/ContatoEntity')

module.exports = () => sequelize.sync({ force: true })