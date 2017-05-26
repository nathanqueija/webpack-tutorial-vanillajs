function info(text){
    console.log(`INFO: ${text}`);
}

//Usando o CommonJS, o webpack suporta o CommonJS como a sintaxe de módulos do ES6
//Dentro desse objeto que está sendo exporta terá uma chave info com o valor da função
//Estou usando ES6 para simplicar esse export já que a chave e o valor tem o mesmo nome
module.exports = {info}