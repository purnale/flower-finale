import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupimg from '../assets/sign.jpg'

const SignUp = ({ setSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform signup logic here
    if (email && password) {
      // Set signup flag to true
      setSignUp(true);
      // Navigate to the main app component
      navigate("/");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
  <section className="contact pt-32 " id="contact">
  <h1 className="heading">
    <span> Sign Up </span>
  </h1>

  <div className="flex flex-wrap-reverse justify-center">
  <div className="flex-1 flex-shrink-0 w-full max-w-md pt-32 " >
    <form onSubmit={handleSignUp} className="bg-white shadow-md rounded-lg px-10 py-12">
      <input
        type="email"
        placeholder="Enter Email"
        className="box appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="box appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <input type="submit" value="Sign Up" className="btn py-3 px-6" />
        <button className="text-gray-600 text-sm">Skip to login</button>
      </div>
    </form>
  </div>
</div>


</section>

  
  );
};

export default SignUp;
