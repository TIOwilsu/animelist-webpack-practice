const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminSvgo = require('imagemin-svgo')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

const config = [
    new HtmlWebpackPlugin({
        filename: '../templates/index.html',
        template: 'src/templates/index.html'
    }),
    new CopyWebpackPlugin([
        {
            from:'src/assets/images',
            to: '../assets/images'
        }
    ]),
    new ImageminPlugin(
        {
            pngquant: ({quality: 75}),
            plugins: [
                imageminMozjpeg({quality: 75}),
                imageminSvgo({plugins: [{removeViewBox: false}]}),
            ],
        },
    ),
    new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpe?g|png)/,
          options: {
            quality:  75
          }
        }],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true
    })
]

module.exports = config