const path = require('path') 

const config = {
    open: true,
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, '../src/templates/'),
    compress: true,
    index: 'index.html',
    port: 3000
}

module.exports = config
        
