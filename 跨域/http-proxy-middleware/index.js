const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')

const port = 3000
const options = {
    target: 'XXXXXXXXXXXXXX',  // host
    changeOrigin: true, 
    ws: true, 
    pathRewrite: {
      '^/api': '/api_v4', 
    }
  }
const exampleProxy = createProxyMiddleware(options)

app.use('/api', exampleProxy);

app.use(express.static('public'))

app.listen(port,()=> console.log(`Example app listening on port ${port}!`))