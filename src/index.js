import React from 'react'
import express from 'express'
import renderer from './helpers/renderer'
import { render } from 'react-dom'


const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.send(renderer(req))
})

app.listen(8080, () => {
    console.log(`server is running on port 8080 on ${Date.now()}`)
})