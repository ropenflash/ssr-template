import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'


class UsersList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render() {
        return (
            <div>
                "Users List is here"
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)