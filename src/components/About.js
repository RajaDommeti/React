import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is From About React</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
