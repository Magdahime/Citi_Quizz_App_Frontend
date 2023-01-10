import React from "react"
import Question from './Question'


class NewQuiz extends React.Component{

    constructor() {
        super()
        this.state = {
            quiz : {
                id : '',
                title : '',
                questionsList : [],
            },
            question : {id:'',question:'',correctAnswer:'',options:[],timeLimit : '',points:''},
            quizzes : [],
            questionNum  : 1
            
        }

    }

    handleSubmit = () => {
        this.props.handleCloseModal()
    }



    addQuestion = () => {
        var questionNumber = this.state.questionNum
        questionNumber = questionNumber + 1
        this.setState({questionNum:questionNumber})
        var newQuestion = {id:this.state.questionNum,question:'',correctAnswer:'',options:[],timeLimit:'',points:''}
        var questionsList = [...this.state.quiz.questionsList]
        questionsList.push(newQuestion)
        this.setState({questionsList:questionsList})
        
      }

      

    render(){
     

     

        return(
            <div>
                
              <h1>Quiz creater</h1>
              <br></br><br></br>
              <label>Quiz Title : </label>
              <input></input>
              <br></br><br></br><br></br>
              <Question></Question>
              <br></br><br></br><br></br>
              {this.state.addQuestion?<Question questionNumber={this.state.questionNum}></Question>:''}
              <button onClick={this.addQuestion}>Add question</button>
              <br></br><br></br>
              <button>Save quiz</button>
              <br></br><br></br>
              <button>Cancel quiz</button>
              
             
            </div>
        )
    }

}

export default NewQuiz