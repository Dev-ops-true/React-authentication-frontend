import React, { Component } from 'react'
import Registration from './Auth/Registration'
import Login from './Auth/Login'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data)
    //TODO update parent component
    this.props.history.push("/dashboard")
  }

  handleLogoutClick() {
    axios
    .delete("http://localhost:3001/logout", { withCredentials: true})
    .then(response => {
      this.props.handleLogout()
    }).catch(error => {
      console.log("logout error", error)
    })
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Log Out</button>
        <Registration  handleSuccessfulAuth={this.handleSuccessfulAuth}/>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    )
  }
}

