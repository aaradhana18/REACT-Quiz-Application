import React, { Component } from 'react'

export default class QandA extends Component {
  render() {
    return (
        <div class="border-standard">
            <div class="card question-card">
                <div class="card-body">
                <div class="card-title fw-bolder fs-4">#Question will be displayed here. This is some text within a card body.</div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">#Option 1. With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">#Option 2. With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">#Option 1. With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card option-card">
                        <div class="card-body">
                            <p class="card-text">#Option 2. With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
