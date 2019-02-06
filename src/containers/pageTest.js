import React from "react";

export default class Test extends React.PureComponent {


  constructor(props) {
    super(props);
  }


  render() {
  console.log(this.props)
    return (
      <div>
        <h2>{this.props.extra}</h2>
      </div>
    );
  }

}