import React, { Component } from 'react'
import Data from '../../'

export default class QandA extends Component {
  render() {

    let count = this.props.count;

    const questions = [
        {
          text: "React JS was developed by?",
          options: [
            { id: 0, text: "IBM", isCorrect: false },
            { id: 1, text: "Apache", isCorrect: false },
            { id: 2, text: "Google", isCorrect: false },
            { id: 3, text: "Facebook", isCorrect: true },
          ],
        },
        {
          text: "Identify the smallest building block of React",
          options: [
            { id: 0, text: "Components", isCorrect: true },
            { id: 1, text: "Props", isCorrect: false },
            { id: 2, text: "Elements", isCorrect: false },
            { id: 3, text: "None of the above", isCorrect: false },
          ],
        },
        {
          text: "What is React mainly used for building?",
          options: [
            { id: 0, text: "User Interface", isCorrect: true },
            { id: 1, text: "Design Platform", isCorrect: false },
            { id: 2, text: "Database", isCorrect: false },
            { id: 3, text: "Connectivity", isCorrect: false },
          ],
        },
        {
          text: "Which of the following function is used to change the state of react component?",
          options: [
            { id: 0, text: "this.state", isCorrect: false },
            { id: 1, text: "this.setState", isCorrect: true },
            { id: 2, text: "this.setChangeState", isCorrect: false },
            { id: 3, text: "this.Change", isCorrect: false },
          ],
        },
        {
          text: "Among the following which acts as the input of class-based component?",
          options: [
            { id: 0, text: "Render", isCorrect: false },
            { id: 1, text: "Class", isCorrect: false },
            { id: 2, text: "Props", isCorrect: true },
            { id: 3, text: "Factory", isCorrect: false },
          ],
        },
        {
          text: "Total ways of defining variables in ES6 is?",
          options: [
            { id: 0, text: "1", isCorrect: false },
            { id: 1, text: "2", isCorrect: false },
            { id: 2, text: "3", isCorrect: true },
            { id: 3, text: "4", isCorrect: false },
          ],
        },
        {
          text: "Among the corner which is a must-have for every ReactJS component?",
          options: [
            { id: 0, text: "renderComponent", isCorrect: true },
            { id: 1, text: "render", isCorrect: false },
            { id: 2, text: "setinitialComponent", isCorrect: false },
            { id: 3, text: "Component", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is used to access a function fetch()  from h1 element in JSX?",
          options: [
            { id: 0, text: "<h1>${fetch()}</h1>", isCorrect: true },
            { id: 1, text: "<h1>{fetch}</h1>", isCorrect: false },
            { id: 2, text: "<h1>${fetch}</h1>", isCorrect: false },
            { id: 3, text: "<h1>{fetch()}</h1>", isCorrect: false },
          ],
        },
      ];

    return (
        <div class="border-standard">
            <div class="card question-card">
                <div class="card-body">
                <div class="card-title fw-bolder fs-4">{questions[count].text}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">{questions[count].options[0].text}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">{questions[count].options[1].text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">{questions[count].options[2].text}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">{questions[count].options[3].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
