import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

import Home from './client/components/Home'

const content = renderToString(<Home />)

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {

    const html = `
    <html>
        <head>
            <title>
            SSR Template
            </title>
        <head>
        <body>
        <div id="root">
        ${content}
        <div>
        </body>
        <script src="bundle.js"></script>
    </html>
    `
    res.send(html)
})

app.listen(8080, () => {
    console.log(`server is running on port 8080 on ${Date.now()}`)
})