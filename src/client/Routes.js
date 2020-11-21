import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'
import Navigation from './components/Navigation'

export default () => {
    return (
        <div id="new">
            <Route path="/" component={Navigation} />
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UsersList} />
        </div>
    )
}