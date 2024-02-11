import React from "react";
import Profile1 from "./Profile1";
import Profile2 from "./profile2";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hi I am to be updated",
      count: 0,
    };
    console.log("hi this is parent profile constructor");
  }

  componentDidMount() {
    console.log("hi this is parent profile mount");
    this.intervalId = setInterval(() => {
      console.log("hi");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <h2 onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.message}
        </h2>
        <h3>{this.state.count}</h3>
        <Profile1 name={"Profile1"} />
        <Profile2 name={"Profile2"} />
        {console.log("hi this is parent profile render")}
      </>
    );
  }
}

export default Login;
