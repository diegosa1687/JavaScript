const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
globalThis = global

module.exports = {
    // ['development, production]
    // 'development' : gera um arquivo maior já que é dedicado para o desenvolvimento
    // 'production' : gera um arquivo menor (indicado para ser colocado no servidor para envio para o cliente)
    mode: modoDev ? 'development' : 'production',
    // script a ser disparado
    // nesse caso o script já importava o outro, logo, no arquivo final foi
    // implementado o import do outro também
    entry: './src/principal.js',
    output: {
        // aqui tu configura a saída do teu build/dist
        filename: 'principal.js',
        // __dirname = .../Javascript/Webpack
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    // aqui serão configurados os plugins
    plugins: [
        // faz parte de colocar o código css em um arquivo separado
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: { ecma: 6 }
        })
    ],
    // fazer agora a configuração para o css ser reconhecido
    module: {
        rules: [{ // primiras regras de css
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // para o css ir num arq separado, add essa linha (conflita com style-loader)
                // 'style-loader', // adiciona css a dom injetando a tag <style>
                'css-loader', // interpreta @import, url()
                'sass-loader'
            ]
        }, { // definindo agora as regras de imagens
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}