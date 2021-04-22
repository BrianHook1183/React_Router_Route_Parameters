import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";

// *INSTRUCTIONS
// Update this app to have /, /user/:userId, and /user/new routes. Any other route displays a 404 message.
// /user/:userId displays the UserProfile for the specified ID
// /user/new displays "Unable to create a new user"
// Any other route displays "404 Not Found"

//! note to self: while this passed all tests, UserProfile never successfully fetched, but I believe that was an issue on the API's end

function App() {
  function HomePage() {
    return <p>Home Page</p>;
  }

  function NotFound() {
    return <h1>404 Not Found</h1>;
  }

  function NewUserBlocked() {
    return <p>Unable to create a new user</p>;
  }

  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((_ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </div>
        ))}
      <Switch>
        <Route exact={true} path="/">
          <HomePage />
        </Route>
        <Route path="/user/new">
          <NewUserBlocked />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
