import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState({
    name: " ",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setName({
      name: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { name })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("User is added successfully")
      });
  };

  return (
    <div>
      <p>Add Users</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Form;