/****************************************************************************
 * Objetivo: Iniciar primeiros comandos em Node.JS
 * Autor: Edvan
 * Data: 29/07/2025
 * Versão: 1.0 
 ****************************************************************************/

//Import da biblioteca pa implementação de input do usuário via terminal
//Usando de forma provisória
var readline = require('readline');

//Criando um objeto de entrada de dados para captar ou printar dados no terminal, equivalente do nosso querido scanner do Java
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Método question do readline, ele vai dar print na nossa string e no callback (após o usuário dar enter, por conta do question) ele vai rodar o function com o dado coletado
entradaDeDados.question("Digite seu nome: ", function(nome){
    var nomeUsuario = nome;

    if (nomeUsuario == ''){
        console.log('Não foi possível processar a solicitação, fulano sem nome')
    }else{
        //String() Converte var para String (para garantir que não vai explodir tudo, sabe como é, linguagem não fortemente tipada)
        //toUpperCase() Método simples, faz a mesma coisa que no Java
        console.log(`O nome digitado no question foi ${String(nomeUsuario).toUpperCase}`);
    }

    //Para encerrar o método, famoso return ou break
    entradaDeDados.close();

});

/*
// sysout do java (fazer print no terminal)
console.log('Hello world!'); 

//Declarando e iniciando uma variável
var nome = "";
var number ,numero = 13;

//Exemplo de concatenação (Juntar variáveis com um string na exibição de um print)
console.log(nome);
console.log("O nome digitado foi " + nome);

// Concatenação de método reduzido (famoso Stringformat)
console.log(`O nome digitado foi ${nome}`);

//typeof = comando que retorna o tipo de dados de um objeto ou variável
console.log(typeof(nome));
console.log(typeof(typeof(nome))); // isso aqui é só curiosidade minha

//para pegar input do usuário no terminal
*/
