const path = require('path')
const devServerConfig = require('./webpack/devserver.config.js')
const moduleConfig = require('./webpack/module.config.js')
const pluginsConfig = require('./webpack/plugins.config.js')

module.exports = [
    {
        entry: {
           'js/bundle.min.js': './src/assets/js/index.js',
           'css/styles.min.css': './src/assets/scss/styles.scss'
        },
        output: {
            path: path.resolve(__dirname, './dist/assets/') ,
            filename: '[name]'
        },
        devServer: devServerConfig,
        module: moduleConfig,
        plugins: pluginsConfig,
    }
]