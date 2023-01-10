
import React from "react"
import './Home.css'
import Login from './Login'
import quizLogo from './Images/quizLogo.png'
import { NavLink } from 'react-router-dom'





class Home extends React.Component{

    render() {
        return(
            <div className="body">
                    <header className="header">
                    <img style={{float:'left'}} src={quizLogo} alt="Quiz logo" width="400px" height="250vmin"></img>
                    <button style={{width:'200px', float:'right', marginRight:'20px',marginTop:'10px'}} className="button-27">
                    <NavLink style={{fontSize:'20px',color:'white'}} to='./adminlogin'>Admin login</NavLink>
                    </button>
                    </header>
                    <hr></hr>
                <div>
                    <div className="centered">
                    <h1 className="h1" style={{marginTop:"0px"}}>Welcome to Quizee!</h1>
                    <br></br><br></br><br></br>
                    <h1>Login to get started!</h1>
                    <Login></Login>
                    </div>
                </div>
                

            
                    
            </div>
        )
    }
}
export default Home