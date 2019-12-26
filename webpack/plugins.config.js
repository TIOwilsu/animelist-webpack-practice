const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = [
    new HtmlWebpackPlugin({
        filename: '../templates/index.html',
        template: 'src/templates/index.html'
    }),
    new CopyWebpackPlugin([
        {
            from:'src/assets/images',
            to: '../assets/images'
        },
        {
            from: 'src/assets/fonts/',
            to: '../assets/fonts',
        }
    ])
]

module.exports = config