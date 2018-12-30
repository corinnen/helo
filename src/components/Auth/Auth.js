import React, {Component} from 'react';
import axios from 'axios';

export default class Auth extends Component {
    constructor(){
        super()
        this.state ={
            username: "",
            password: ""
        }
    }


handleUserInput(username){
    this.setState({
        username
    })
}

handlePassInput(password){
    this.setState({
        password
    })
}

handleClick = () => {
    axios.post('/auth/register', this.state).then(response => {
        window.location.assign('/#/dashboard')
    })
}
handleLogin = ()=> {
    axios.post('/auth/login', this.state).then(response => {
        window.location.assign('/#/dashboard')
    })
}

    render(){
        return (
            <div>Auth
                <input placeholder="username" type="text" value={this.state.username} onChange={(e) => this.handleUserInput(e.target.value)}></input>
                <input placeholder="password" type="text" value={this.state.password} onChange={(e) => this.handlePassInput(e.target.value) }></input>
                <button onClick={this.handleLogin} >Login</button>
                <button onClick={this.handleClick}>Register</button>
            </div>
        )
    }
}