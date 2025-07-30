import React, { useState } from "react";
import axios from "axios"; // Direct API call without authService

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", user);
      setMsg("Login Successful!");
      console.log("User logged in successfully", response.data);
      setUser({ email: "", password: "" });
    } catch (error) {
      setMsg("Invalid Credentials");
      console.error("Login error", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Login</div>
            {msg && <p className="fs-4 text-center text-danger">{msg}</p>}
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={user.email}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={user.password}
                    required
                  />
                </div>
                <button className="btn btn-primary col-md-12">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;