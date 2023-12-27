import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1 :1,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count :{this.state.count}</h1>
        <h1>Count :{this.state.count1}</h1>
        <h2>Name:{this.props.name}</h2>
        <h3>Hyderabad</h3>
        <h3>Contact : @raja_dommeti</h3>
      </div>
    );
  }
}

export default UserClass;
