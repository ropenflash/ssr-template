import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from '../client/components/Home'

const content = renderToString(<Home />)
export default () => {

    return `
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
    </html>`
}