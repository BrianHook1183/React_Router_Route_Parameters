import React from "react";
import { Link } from "react-router-dom";

// Update this app to have /, /user/:userId, and /user/new routes. Any other route displays a 404 message.
// /user/:userId displays the UserProfile for the specified ID
// /user/new displays "Unable to create a new user"
// Any other route displays "404 Not Found"

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((_ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default App;
