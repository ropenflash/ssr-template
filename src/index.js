import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import Routes from './client/Routes'
import { matchRoutes } from 'react-router-config'

const app = express()

app.use(express.static('public'))

app.get('*', async (req, res) => {
    const store = createStore()

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {

        res.send(renderer(req, store))
    })

})

app.listen(8080, () => {
    console.log(`server is running on port 8080 on ${Date.now()}`)
})