//Importando no estilo CommonJS
const logger = require('./logger');

//Importando no estilo ES6
import Pessoa from './Pessoa';

import React from 'react';
import './css/index.css';

logger.info('Usando o padrão CommonJS');

const pessoa = new Pessoa('Nathan');
console.log(pessoa.toString());

const produto = {
    nome: 'Caneta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Borracha';
console.log(produto);
console.log(novoProduto);


