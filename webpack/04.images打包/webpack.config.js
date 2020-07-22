
const {resolve} = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'dist')
    },
    module:{
        rules:[

        ]
    },
    pulgins:[

    ],
    mode:'development'
}