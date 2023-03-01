import MockData from "../MOCK_DATA.json";
import { useState } from "react";
const SearchTable = () => {
  const [searchTerms, setsearchTerm] = useState("");
 

  



  const Data = MockData.filter((val) => {
    if (searchTerms === "") {
      return val;
    } else if (
      val.first_name.toLowerCase().includes(searchTerms) ||
      val.last_name.toLowerCase().includes(searchTerms) ||
      // || val.email.toLowerCase().includes(searchTerms.toLowerCase())
      val.gender.toLowerCase().includes(searchTerms)
    ) {
      return val;
    }
  }).map((item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.phone_number}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search.."
        className="form-control"
        style={{ marginTop: 50, marginButtom: 20, width: "40%" }}
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />

      <table className="table table-borderd">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th >Phone Number</th>
          </tr>
        </thead>
        <tbody>{Data}</tbody>
      </table>
    </div>
  );
};

export default SearchTable;
