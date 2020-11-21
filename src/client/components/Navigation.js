import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <Link to='/users'>Users</Link>
            <Link to='/users'>Home</Link>
        </div>
    )
}
