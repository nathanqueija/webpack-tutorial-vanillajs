//Usnado ES6 pra exportar
//Usando default pra dizer que por padrão isso vai ser exportado
export default class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    toString(){
        return `Pessoa: ${this.nome}`;
    }

}

