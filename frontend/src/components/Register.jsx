import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handlesubmit = async() => {
    const payload = {
      name,
      email,
      pass,
    };
    console.log(payload);
    fetch("https://shy-gray-gharial-gear.cyclic.app/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
//     const reg = await axios.post(
//         "https://easy-gold-bream-tie.cyclic.app/users/register",
//         payload
//       );
//       console.log(reg);
  };
  return (
    <>
      <div>Register</div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handlesubmit}>submit</button>
    </>
  );
};

export default Register;
