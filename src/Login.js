import React from "react"
import './Home.css'

class Login extends React.Component {
    render() {
    return (
        <div>
            <form>
            
            <input className="login-input" type="input"  placeholder="Email" name="email" id='email' required />
            <br></br><br></br>
            <input className="login-input" type="input"  placeholder="Nickname" name="nick" id='nick' required />
            <br></br><br></br>
            <button className="button-27">Login</button>
            </form>
        </div>
    )
    }
}

export default Login