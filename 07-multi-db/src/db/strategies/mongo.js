const Icrud = require('./base/interfaces/interfacecrud')

class MongoDB extends Icrud {
  constructor() {
    super()
  }
  create(item) {
    console.log("O item foi salvo  em mongo DB");
  }
}


module.exports = MongoDB
