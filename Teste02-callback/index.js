function getUser(callback) {
  //atrasando  o retorno
    callback(null,{
        nome:"rochelly",
        id: 2011,
        dataNascimento: new Date()
      });

}

function getTelNumber(userId,callback) {
    return callback (null,"(038)-35218218")
}

function getProfission(userId,callback) {
    return callback (null,"Analista De  sistemas")
}


getUser(function resolvUser(error1,usuario) {
  console.log(usuario);
 getTelNumber(usuario.id,function(error1,telefone){
    console.log(telefone);
    getProfission(usuario.id,function(error1,profission){
      console.log(profission);
    })

  })

})
