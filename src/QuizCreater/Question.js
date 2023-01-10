import React from "react"


class Question extends React.Component{
  constructor() {
    super()
  }

  


    render() {
      console.log("Question number     ",this.props.questionNumber)
        return (
          <div>
            
              <div>
                  <label>Question {this.props.questionNumber}: </label>
                  <input  id = "q1" type = "text" autoFocus></input>
                  <br></br><br></br>
                  <label>Add attachment </label>
                  
                  <br></br><br></br>
                  <label>Answer 1: </label>
                  <input id = "1a1" type = "text" autoFocus/>
                <label>Answer 2: </label>
                <input id = "1a2" type = "text" autoFocus/>
                <br></br><br></br>
                <label>Answer 3: </label>
                <input id = "1a3"  type = "text"autoFocus/>
                <label>Answer 4: </label>
                <input id = "1a4"  type = "text" autoFocus/>
                <br></br><br></br>
                <label>Correct Answer (1-4) :</label>
                <input  id = "correct1"  type = "number" autoFocus/>
              </div>
          </div>
        )
    }
}

export default Question