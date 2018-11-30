
const util = require('util');
const getPofissionAsync = util.promisify(getProfission)

function getUser() {
  return new Promise(function resolviPromise(resolve, reject) {
    //  return reject(new Error("Impossível  Encontrar o usuário"))
    return resolve({
      nome: "rochelly",
      id: 2011,
      dataNascimento: new Date()
    })
  })
}

function getTelNumber(userId) {
  return new Promise(function resolvePromise(result, reject) {
    return result("(038)-35218218")
  })
}

function getProfission(userId, callback) {
  return callback(null, "Analista De sistemas")
}



const usuarioPromise = getUser()

usuarioPromise
  .then(function usuario(resultado) {
    return getTelNumber(resultado.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: resultado.nome,
          id: resultado.id,
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    return getPofissionAsync(resultado.id)
    .then({
      return {
        nome: resultado.id,

      }
    })

  })

  .then(function resultado(resultado) {
    console.log(resultado);

  })
  .catch(function(error) {
    console.log(error);
  })
