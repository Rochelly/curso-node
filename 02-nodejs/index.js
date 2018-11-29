/*
0 Obter um usuário
1 Obter o número  de telefone de um usuário  a partir de seu Id
2 Obter o endereço do usuario pelo Id
*/
function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: 'Rochelly Fernandes Andrade',
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      numero: "3532-8218",
      dd: '38'
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "Francisco Lourenço Machado",
      numero: "384"
    })
  }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu erro usuario", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Deu erro telefone", error1);
      return;
    }
    obterEndereco(usuario.id, function resolverTelefone(error2, endereco) {
      if (error2) {
        console.error("Deu erro endereço", error2);
        return;
      }
      console.log(`
       Nome : ${usuario.nome},
       Endereço: ${endereco.rua},${endereco.numero},
       Telefone: ${telefone.dd},${telefone.numero}
     `);
    })
  })
});
