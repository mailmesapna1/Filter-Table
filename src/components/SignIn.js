import React from "react";
import "./SignIn.css";
// import "./Data";
import { useState } from "react";
const SignIn = (props) => {
  const [query, setQuery] = useState("");
  var item = props.item;
  // var data = props.item
  console.log(item.filter((item) => item.name.toLowerCase().includes("s")));

  const Items = props.item.filter((item) => item.name.toLowerCase().includes(query)).map((item) => {
      return (
        <tr>
          <td>{item.postId}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.body}</td>
        </tr>
      );
    });
  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="table-info bordered">
        <thead>
          <tr>
            <th>Post id</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>{Items}</tbody>
      </table>
      
    </div>
  );
};
export default SignIn;
