import React from 'react'
export default class extends React.Component {
  static getInitialProps ({ req }) {
    return {
      server: req ? true : false
    }
  }

  render() {
    return (
      <div>Hi from { this.props.server ? 
        'server' : 
        'client' }</div>
    )
  }
}