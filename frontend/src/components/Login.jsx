import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handlesubmit = () => {
    const payload = {
      
      email,
      pass,
    };
    console.log(payload);
    fetch("https://shy-gray-gharial-gear.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((res) => {

        console.log(res);
        localStorage.setItem("token",res.token)
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>Login</div>
      
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={pass}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handlesubmit}>login</button>
    </>
  );
};

export default Login;
