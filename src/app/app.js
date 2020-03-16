import React, { Component, createRef } from 'react'
import Form from './components/form'
import { barchartManager } from './barchart-manager'
import * as d3 from 'd3'
import './app.css'

var data = []
class App extends Component {
  constructor (props) {
    super(props)
    this.node = createRef()
    this.inputNameRef = createRef()
    this.inputAgeRef = createRef()
  }

  componentDidMount () {
    const d3El = d3.select(this.node.current)
    const svg = d3El.append('svg')
    const g = svg
      .attr('width', '100%')
      .attr('height', '100%')
      .append('g')

    this.g = g
    // .attr('transform', 'translate(' + 10 + ',' + 10 + ')')

    this.updateData(data)
  }

  updateData (data) {
    barchartManager(data, this.g)
  }

  onHandleSubmit = (name, age) => {
    if (name.length === 0 || !name) {

    }
    data.push({
      id: data.length,
      name: name,
      age: age
    })
    this.updateData(data)
  }

  render () {
    return (
      <div>
        <div
          className='d3-cont'
          ref={this.node}
        />
        <Form
          handleSubmit={this.onHandleSubmit}
        />
      </div>
    )
  }
}

export default App
