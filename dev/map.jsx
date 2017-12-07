import React, { Component, PropTypes } from 'react'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends Component {

  componentDidMount() {
    MapboxGl.accessToken = 'pk.eyJ1IjoiY2VjZTE5IiwiYSI6ImNpaHBvNTBnZjA0NHZ0Nm00bGJoMDAxdDkifQ.Nj2-Tx6bRcpoliPuSqAGHw'

    new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/dark-v9'
    })
  }

  render() {
    return (
      <div id='map' ref={(x) => { this.container = x }}>
      </div>
    )
  }
}

export default Map
