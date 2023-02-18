import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  const handlesubmit = () => {
    const payload = {
      title,
      body,
    };
    console.log(payload);
    fetch("https://shy-gray-gharial-gear.cyclic.app/notes/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        "Authorization":localStorage.getItem("token")
      },
    }).then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>CreateNote</div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
     
      <button onClick={handlesubmit}>add note</button>
    </>
  );
};

export default CreateNote;