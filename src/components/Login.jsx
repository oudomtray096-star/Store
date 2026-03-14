import React, { useState } from "react";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox"/>
              Remember me
            </label>

            <span className="text-blue-600 cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
          Don’t have an account? 
          <span className="text-blue-600 ml-1 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;