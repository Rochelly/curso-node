 class NotImplementedException extends Error {
   constructor() {
     super("Not implemented  Expeption by Rochelly") // chama o  construtor da class pai
   }
 }



 class Icrud {
   create(item) {
     throw new NotImplementedException()
   }

   read(query) {
     throw new NotImplementedException()
   }
   update(id, item) {
     throw new NotImplementedException()
   }
   delete(id) {
     throw new NotImplementedException()
   }
 }


 class Postgres extends Icrud {
   constructor() {
     super()
   }
   create(item) {
     console.log("O item foi salvo  em Postgres DB");
   }
 }

 class MongoDB extends Icrud {
   constructor() {
     super()
   }
   create(item) {
     console.log("O item foi salvo  em mongo DB");
   }
 }

 const contextMongo = new ContextStrategy(new MongoDB())
 contextMongo.create()
 contextMongo.read()
 const contextPostgres = new ContextStrategy(new Postgres())
 contextPostgres.create()
