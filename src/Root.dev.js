import React, { Component } from 'react'
import './styles.scss'

class App extends Component { 
  state = { active: false };

  toggle = () => {
    this.setState({ active: !this.state.active})
  }

  render() {
    const className = this.state.active ? 'active' : ''

    return (
      <h1 className={className}
          onClick={this.toggle}>
        Fearless
      </h1>
    )
  }
}

export default App