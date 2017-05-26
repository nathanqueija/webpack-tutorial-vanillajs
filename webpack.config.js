//Arquivo de configuração do Webpack que será executado no node
//O Webpack que vai pegar todos os meus arquivos da aplicação (inclusive módulos utilizados) e gerar um único js na pasta output
//Esse arquivo gerado está de uma forma que o navegador consiga entender

const webpack = require('webpack');

//Plugin do webpack pra ler os arquivos css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Objeto que representa toda a configuração que a aplicação vai precisar
module.exports = {
    //Qual é o ponto de entrada da aplicação?:
    entry: './src/index.js',
    //Onde vai gerar o arquivo js de saída?:
    //__dirname é uma variável de ambiente do node que corresponde à pasta atual do projeto
    output: {
        path: __dirname + '/public',
        //Qual vai ser o nome do arquivo de saída?:
        filename: './bundle.js'
    },
    //o webpack-dev-server é um servidor focado pra desenvolvimento
    //também gera o bundle novamente quando o arquivo é salvo e recarrega o browser
    devServer: {
        //Em qual porta vai rodar?:
        port: 8080,
        //De qual pasta o server vai pegar os arquivos
        //No caso será na pasta public que é onde vai ser gerado o js de saída
        contentBase: './public'
    },
    plugins: [

        //Qual arquivo que ele vai gerar como resultado do processamento?:
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [

            //O browser não entende o que é import, export etc...
            //Preciso de algo para traduzir para a linguagem que o browser entenda
            //Quem faz essa traudção é o babel

            //pacotes no package.json: babel-core é o babel em si
            //babel-loader é uma conexão do webpack com o babel
            //babel-preset-es2015 é o preset que interpreta funções do ES6

            //Primeiro loader focado em JS
            {
                //Qual tipo de arquivo esse loader vai carregar?
                //Qualquer arquivo que terminar com .js
                test: /.js?$/,
                //Qual loader vai carregar esses arquivos?
                loader: 'babel-loader',
                //Não quero que o loade leia arquivos de node_modules
                exclude: /node_modules/,
                //O que esse loader vai interpretar?
                query: {
                    //ES6, React
                    presets: ['es2015', 'react'],
                    //Plugin do babel para o spread operator (...)
                    plugins: ['transform-object-rest-spread']
                }

            },
            //Segundo loader focado em CSS
            {
                //Qual tipo de arquivo esse loader vai carregar?
                //Qualquer arquivo que terminar com .css
                test: /\.css$/,
                //Qual loader vai carregar esses arquivos?
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

            }
        ]
    }
}

