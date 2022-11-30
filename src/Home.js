
import React from "react"
import './Home.css'
import Login from './Login'
import quizLogo from './Images/quizLogo.png'


class Home extends React.Component{
    render() {
        return(
            <div className="body">
                    <header className="header">
                    <img style={{float:'left'}} src={quizLogo} alt="Quiz logo" width="400px" height="250vmin"></img>
                    <button style={{width:'200px', float:'right', marginRight:'20px',marginTop:'10px'}} className="button-27">Login as Admin</button>
                    </header>
                    <hr></hr>
                <div className="left">
                    <div className="centered">
                    <h1 className="h1" style={{marginTop:"0px"}}>Welcome to Quizee!</h1>
                    <br></br><br></br><br></br>
                    <h1>Login to get started!</h1>
                    <Login></Login>
                    </div>
                </div>
                <div className="right">
                    <div className="centered2">
                    <h1 className="signup-input" style={{color:"#FCFFE7"}}>New here?</h1>
                    <p style={{fontSize:"40px"}}>Sign up to get started!</p>
                    <button style={{width:'250px',height:'80px'}} className="button-27">
                        <span style={{fontSize:"25px"}}>Sign up</span>
                    </button>
                    </div>
                </div>
                <hr></hr>
                    <footer className="footer">
                        <h2 style={{marginTop:"0px", marginBottom:"0px", color:"grey"}} >&#169; Copyrights reserved @Citi 2022</h2>
                    </footer>
            </div>
        )
    }
}
export default Home