/*
0 Obter um usuário
1 Obter o número  de telefone de um usuário  a partir de seu Id
2 Obter o endereço do usuario pelo Id
*/
//importação do modulo util

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  //quando der algum problema ->  reject(erro)
  //quando der certo -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      //    return reject(new Error('Simulação de Erros'))
      return resolve({
        id: 1,
        nome: 'Rochelly Fernandes Andrade',
        dataNascimento: new Date()
      });
    }, 1000);
  })

}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        numero: "3532-8218",
        dd: '38'
      });
    }, 2000);
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Francisco Lourenço Machado",
      numero: "384"
    })
  }, 2000);
}

const usuarioPromise = obterUsuario();
// para manipular o sucesso usamos  a função .then
// para manipular o erro usamos a função .catch
//
// usuarioPromise.then(async function pegouUsuario(usuario) {
//   console.log(usuario);
//   let operacoes = [
//     obterTelefone(usuario.id),
//     obterEnderecoAsync(usuario.id);
//   ];
//
//   Promise.all(operacoes).then();


usuarioPromise
  .then(function(usuario) {
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result) {
      return {
          usuario: {
          nome: usuario.nome,
          id: usuario.id
          },
          telefone: result
      }
    })
  })
  .then(function (resultado) {
      //console.log("Resultado", resultado);
     const endereco = obterEnderecoAsync(resultado.usuario.id)
     return endereco.then(function resolverEndereco(result) {
       return{
        usuario: resultado.usuario,
        telefone:  resultado.telefone,
        endereco: result
       }
     })
  })
  .then(function(resultado) {
    console.log(`
     Nome : ${resultado.usuario.nome},
     Endereço: ${resultado.endereco.rua},${resultado.endereco.numero},
     Telefone: ${resultado.telefone.dd},${resultado.telefone.numero}
   `);
  })
  .catch(function(error) {
    console.error("Deu erro", error);
  })

// obterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.error("Deu erro usuario", error);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error("Deu erro telefone", error1);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverTelefone(error2, endereco) {
//       if (error2) {
//         console.error("Deu erro endereço", error2);
//         return;
//       }
//       console.log(`
//        Nome : ${usuario.nome},
//        Endereço: ${endereco.rua},${endereco.numero},
//        Telefone: ${telefone.dd},${telefone.numero}
//      `);
//     })
//   })
// });
