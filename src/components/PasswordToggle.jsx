import React, { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Password</h2>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default PasswordToggle;