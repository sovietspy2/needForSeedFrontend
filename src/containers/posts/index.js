import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class posts extends Component {
  
    constructor(props) {
      super(props);
    }
    


  render() {

    //this.props.extra = this.props.match.params.postId;

      console.log(this.props);
    return (
      <div>
        {this.props.match.params.postId}
      </div>
    )
  }
}
