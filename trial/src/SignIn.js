import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "" && password === "") {
      setLoggedIn(true);
    }
  };

  function handleLogout(event) {
    event.preventDefault();
    setLoggedIn(false);
  }
  return (
    <div>
      {loggedIn ? (
        <>
          <p>Welcome,Admin</p>
          <button onClick={handleLogout}> Logout</button>
        </>
      ) : (
        <>
          <form>
            <label className="text-center">Email :</label>

            <input type="email" value={email} onChange={handleEmailInput} />

            <label className="text-center">Password :</label>

            <input
              type="password"
              value={password}
              onChange={(event) => handlePasswordInput(event)}
            />

            <br />
            <button onClick={handleLogin}>Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
