import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore()
    res.send(renderer(req, store))
})

app.listen(8080, () => {
    console.log(`server is running on port 8080 on ${Date.now()}`)
})