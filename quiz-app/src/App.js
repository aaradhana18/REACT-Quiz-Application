import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import QandA from './Components/QandA/QandA';


import React, { Component } from 'react'

export default class App extends Component {

  count = 0;

  render() {
    return (
      <div className="App">
        <Header />
        <div className='fw-bold fs-5 text-center'>Score: <span className='display-score'>0</span></div>
        <QandA count = {this.count} />
        <Footer Fcount = {this.count}/>
      </div>
    )
  }
}


