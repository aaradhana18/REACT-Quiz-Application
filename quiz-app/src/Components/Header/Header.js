import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid border-standard">
                <a class="navbar-brand">Quiz Application</a>
                <div class="timer-word">Timer: 00:00</div>
              </div>
            </nav>
        </div>
    )
  }
}
