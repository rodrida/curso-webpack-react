const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// objeto donde viven nuestras configuraciones
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // establecemos la ruta para publicarlo, que será la raíz
        publicPath: "/"
    },
    resolve: {
        // trabajamos con 2 extensiones, js y react
        extensions: ['.js', '.jsx'],
        // creamos nuestro Alias
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/')
        }
    },
    mode: 'production',
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
        }),
        // creamos una nueva instancia de cleanWebpackPlugin
        new CleanWebpackPlugin()
    ],
    // agregamos la parte de optimización
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}