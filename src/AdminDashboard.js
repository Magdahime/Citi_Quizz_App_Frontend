import React from "react"
import './Home.css'
import { NavLink } from 'react-router-dom'
import NewQuiz from './QuizCreater/NewQuiz'

class AdminDashboard extends React.Component{
    constructor(){
     super()
     this.state={
         createQuiz : false
     }
    }

    createNewQuiz = () => {
        this.setState({createQuiz:true})
    }

    handleCloseModal = () => {
        this.setState({createQuiz:false})
       
    }
    render() {
        console.log(this.state.createQuiz)
        return (

            <div>
                
                <div style={{backgroundColor:'#A2D2FF'}}>
                <h1 className="admin-dashboard-heading" style={{color:"#FEF9EF",marginTop:'0px'}}>Welcome to Admin Dashboard!</h1>
                <br></br><br></br>
                <hr></hr>
                </div>
                <br></br><br></br>
                <button style={{width:'200px',height:'70px',marginLeft:'3px'}} className="button-27">
                    
                    <NavLink style={{fontSize:'20px',color:'white'}} to='./NewQuiz'>Create Quiz</NavLink>
                </button>
                <br></br><br></br>
                <h2>Upcoming Quizzes : </h2>
                
            </div>
        )
    }
}

export default AdminDashboard