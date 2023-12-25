import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [query, setQuery] = useState("");
  const userList = [
    "John",
    "Emily",
    "Michael",
    "Emma",
    "Christopher",
    "Olivia",
    "Daniel",
    "Sophia",
    "Matthew",
    "Paul",
  ];

  const handleUserChange = (e) => {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
  };

  const filteredUsers = userList.filter((user) =>
    user.toLowerCase().includes(query)
  );

  return (
    <section>
      <h1>Search User</h1>
      <form>
        <input
          type="text"
          placeholder="Search User"
          value={query}
          onChange={handleUserChange}
        />
      </form>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <p key={user}>{user}</p>)
      ) : (
        <p>User Not Found</p>
      )}
    </section>
  );
};

export default App;
