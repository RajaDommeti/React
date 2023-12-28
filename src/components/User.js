import { useState } from "react";

const User = () => {
  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count : {count1}</h1>
      <h2>Name:Raja Dommeti</h2>
      <h3>Hyderabad</h3>
      <h3>Contact : @raja_dommeti</h3>
    </div>
  );
};

export default User;
