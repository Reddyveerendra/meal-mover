import React from "react";
class Profile1 extends React.Component {
  constructor(props) {
    super();
    this.state = { name: props.name };
    console.log(`hi from ${props.name} constructor`);
  }
  componentDidMount() {
    console.log(`hi from ${this.state.name} mount`);
  }
  render() {
    <>
      <h1>Profile1</h1>
      {console.log(`hi from ${this.state.name} render`)}
    </>;
  }
}
export default Profile1;
