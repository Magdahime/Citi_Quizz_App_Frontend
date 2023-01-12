import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'


class AdminLogin extends React.Component{
    render() {
        return (
        <div style={{backgroundImage: "linear-gradient(rgb(0,189,242), rgb(0,179,240), rgb(0,102,179), rgb(0,71,133))",paddingTop:'0px'}} className="signup-body">
        <hr></hr>
        <div style={{marginLeft:'600px',marginTop:'200px',backgroundColor:'white',width:'700px',height:'800px'}}>
            <form style={{paddingTop:'160px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{color:"rgb(0,189,242)"}}>Admin Login!</h1>
            <input style={{height:'70px',width:'400px',borderWidth:'2px',borderWidth:'1px'}} type="input"  placeholder="Name" name="name" id='name' required />
            <br></br><br></br>
            <input style={{height:'70px',width:'400px',borderWidth:'2px',borderWidth:'1px'}} type="input"  placeholder="Email" name="email" id='email' required />
            <br></br><br></br>
            <input style={{height:'70px',width:'400px',borderWidth:'2px',borderWidth:'1px'}} placeholder="Nickname" name="nick" id='nick' required />
            <br></br><br></br>
            <button style={{width:'250px',height:'80px'}} className="button-27">
            <NavLink style={{fontSize:'20px',color:'white'}} to='./adminDashboard'>Login</NavLink>
            </button>
            </form>
        </div>
       
        </div>
        
        )
    }
}

export default AdminLogin