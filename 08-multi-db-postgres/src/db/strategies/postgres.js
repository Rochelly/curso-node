const Icrud = require('./base/interfaces/interfacecrud')
const Sequelize = require('sequelize')
class Postgres extends Icrud {
  constructor() {
    super()
    this._driver = null
    this._herois = null
    //    this.connect()

  }

  async isConnected() {
    try {
      await this._driver.authenticate()
      return true
    } catch (error) {
      console.log("Fail", error);
      return false;

    }
  }


  async defineModel() {
    this._herois = this._driver.define('herois', { // nome da tablela
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        required: true
      },
      poder: {
        type: Sequelize.STRING,
        required: true
      }
    }, {
      tableName: 'tb_heroes',
      freezeTableName: false,
      timestamps: false
    })
    await this._herois.sync();
  }
  async connect() {
    this._driver = new Sequelize(
      'heroes',
      'rochelly',
      'testeteste', {
        host: 'localhost',
        dialect: 'postgres',
        quoteIndentifiers: false,
        operatorsAliases: false
      })
    await this.defineModel()
  }
  async create(item) {
    const  {
      dataValues
    } = await this._herois.create(item)
    return dataValues
  }
}

module.exports = Postgres
