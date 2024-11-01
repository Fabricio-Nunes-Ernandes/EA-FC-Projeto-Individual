function cadastrar(){
    var nome = ipt_nome.value;
    var celular = ipt_celular.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var senha_confimacao = ipt_senha_confirmacao.value;


    
    var mensagem_celular = ""
    var mensagem_email = ""
    var mensagem_senha = ""
    var mensagem_senha_confirmacao = ""
    var cadastro = 0;

  
    var tamanho_celular = celular.length; 

    if(tamanho_celular != 11){
      mensagem_celular = `<b style='font-size: 18px'>Telefone:</b> <br> Número de telefone invalído, quantidade de caracteres invalidas (11 caracteres necessários)`
      cadastro++
    }
    div_mensagem_celular.innerHTML = mensagem_celular;
  

    var email_arroba = email.includes('@');
    if(email_arroba == false){
      mensagem_email = "<b style='font-size: 18px'>Email:</b> <br> Incorreto ou inexistente, certifique-se que possuí '@' <br>"
      cadastro++
    }
    div_mensagem_email.innerHTML = mensagem_email;
  

    var senha_caracter_especial = senha.includes('@') || senha.includes('#') ||senha.includes('$')||senha.includes('!')||senha.includes('%');
    if (senha_caracter_especial == false){ 
      mensagem_senha += `<b style="font-size: 18px">Senha:</b> <br> Acrescente caracter especial (Apenas @#%!%) <br>` 
      cadastro++
    } 
    
    var senha_numero = senha.includes("0") || senha.includes("1") || senha.includes("2") || senha.includes("3") || senha.includes("4") || senha.includes("5") || senha.includes("6") || senha.includes("7") || senha.includes("8") || senha.includes("9")
      if (senha_numero == false){
        mensagem_senha += "Acrescente números<br>"
        cadastro++
      }

      var tamanho_senha = senha.length; 

    if(tamanho_senha < 8){
      mensagem_senha += `Adicione ao menos 8 caracteres<br>`
      cadastro++
    }
    
    var letra_maiuscula = "";
    var letra_minuscula = "";

    for (var contador = 0; contador < tamanho_senha; contador++) {
          var letra = senha[contador];


        if (letra.toLowerCase() != letra) {
           letra_maiuscula = true;
            }

  
        if (letra.toUpperCase() != letra) {
            letra_minuscula = true;
            }
         }


       if (letra_maiuscula == false) {
          mensagem_senha += "Adicione ao menos um caracter maiusculo<br>";
          cadastro++
          }

       if (letra_minuscula == false) {
         mensagem_senha += "Adicione ao menos um caracter minusculo<br>";
         cadastro++
        }

         div_mensagem_senha.innerHTML = mensagem_senha;
  
  

    if(senha != senha_confimacao){
      mensagem_senha_confirmacao = "Senhas estão diferentes"
      cadastro++
    }
    div_mensagem_senha_confirmacao.innerHTML = mensagem_senha_confirmacao;
  
        if (cadastro == "0"){
            alert("Dados cadastrados")


        document.getElementById('ipt_nome').value = "";
        document.getElementById('ipt_celular').value = "";
        document.getElementById('ipt_email').value = "";
        document.getElementById('ipt_senha').value = "";
        document.getElementById('ipt_senha_confirmacao').value = "";
        
               } 
  }