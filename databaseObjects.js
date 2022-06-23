const Sequelize = require('sequelize');

const sequelize = new Sequelize('discordbot', 'Notusername', 'Notpassword', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const TicTacToe = require('./models/tictactoe.js')(sequelize, Sequelize.DataTypes);

module.exports = {
    TicTacToe
};