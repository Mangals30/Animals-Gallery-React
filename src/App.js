import React, {Component} from 'react'
import {animals} from './data/animals.js'
import Animal from './Animal'
import './App.css'

class App extends Component{
  state = {
    animals: animals,
    index:0
  }
  
  displayNextImage = (index) => {
    const animals = this.state.animals
    index < (animals.length-1) ? index++ : index=0
    this.setState({index})
   
    }

  render () {
    const {animals,index} = this.state
    return (
      <div className = "container">
        <Animal animals = {animals}
                index = {index} 
                displayNextImage = {this.displayNextImage}
        />
      </div>
    )

  }
 
}

export default App

