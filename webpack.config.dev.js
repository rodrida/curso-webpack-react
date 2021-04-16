const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// objeto donde viven nuestras configuraciones
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        // trabajamos con 2 extensiones, js y react
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    module: {
        rules: [
            {
                // buscamos las extensiones js ó jsx
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // creamos la regla para HTML
            {
                // trabajamos con la extensión HTML
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            // creamos la regla para trabajar con los loaders de CSS
            {
                // trabajamos con la extensión de CSS ó de Sass
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // creamos una nueva instancia de htmlWebpackPlugin
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        // creamos una nueva instancia de MiniCssExtractPlugin
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    // agregamos el servidor de desarrollo de Webpack
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // lo podemos comprimir
        compress: true,
        // y el puerto
        port: 3006
    }
}