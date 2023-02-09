import React, { Component } from 'react'

export default class Footer extends Component {

  count = this.props.Fcount;

  clickNext = () =>{
    this.count = this.count + 1;
  }
  
  render() {
    return (
      <div class="border-standard footer">
        <div class="row">
          <div class="col-md-3 grey-muted fs-5">Question:  <span>{this.count + 1}/8</span></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3 footer-button"><button type="button" class="btn btn-info next-button" onClick={this.clickNext}>Next</button></div>
        </div>
      </div>
    )
  }
}
