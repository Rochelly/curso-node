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


module.exports = Icrud
