import React, { Component } from 'react'
import data from '../animations/dude.json'
import LottieControl from './LottieControl'


class NotFound extends Component {
  render() {
    return (
      <div>
          <h2>Not the page you're looking for! </h2>
          <LottieControl animation={data} width={"100%"} height={"auto"} />
      </div>
    )
  }
}

export default NotFound