import React, { Component } from 'react'
import Form from '../form/'

export default class FtpsAdd extends Component {
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.props.onAddFtp} />
      </React.Fragment>
    )
  }
}
