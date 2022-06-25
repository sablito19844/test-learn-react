import React, { Component } from "react";
import axios from "axios";
import "./Blog.css"

class Blog extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {

                this.setState({
                    users: res.data

                })
            })
    }

    render() {
        const { users } = this.state
        const usersList = users.map(user => {
            return(
                <div key={user.id}>
 <div className="centent">
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            </div>
                </div>
            )
        })
        return (
            <div>
                <h1>Blog page </h1>
                {usersList}
            </div>
        )
    }
}
export default Blog