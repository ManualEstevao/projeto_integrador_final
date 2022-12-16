const Sequelize = require("sequelize");

if (process.env.NODE_ENV == 'production') {
  const connection = new Sequelize(
    'bdsupreme',
    'userrestaurante',
    'catitu141005',
    {
      host: 'db4free.net',
      dialect: 'mysql',
      timezone: '-03:00',
    }
  )
  module.exports = connection;
}



else {const connection = new Sequelize("bddados", "root", "aluno", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00"
});

module.exports = connection;
}