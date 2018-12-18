const Icrud = require('./base/interfaces/interfacecrud')

 class Postgres extends Icrud {
   constructor() {
     super()
   }
   create(item) {
     console.log("O item foi salvo  em Postgres DB");
   }
 }

module.exports = Postgres
