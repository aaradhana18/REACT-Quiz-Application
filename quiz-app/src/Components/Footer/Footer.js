import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div class="border-standard footer">
        <div class="row">
          <div class="col-md-3 grey-muted fs-5">Question:  <span>1/8</span></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3 footer-button"><button type="button" class="btn btn-info next-button">Next</button></div>
        </div>
      </div>
    )
  }
}
