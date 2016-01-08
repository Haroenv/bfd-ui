import React from 'react'
import PieChart from './main'

export default React.createClass({
  
  renderChart(config) {   
    config.container = this.refs.container
    new PieChart(config)
  },

  componentDidMount() {    
    this.renderChart(this.props.config)
  },

  shouldComponentUpdate(nextProps) {    
    if (this.props.config !== nextProps.config) {
      this.renderChart(nextProps.config)
    }
    return true
  },

  render() {
    return <div ref="container"></div>
  }
})