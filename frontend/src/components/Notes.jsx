import { useEffect,useState } from "react";

const AllNote = () => {
    const [notes,setnote]=useState("")
  useEffect(() => {
    fetch("https://shy-gray-gharial-gear.cyclic.app/notes", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then(res=>res.json()).then((res)=>{
        setnote(res)
        console.log(res)}).catch(err => console.log(err))
  },[])
  const deletehandler=(noteID)=>{
    fetch(`https://shy-gray-gharial-gear.cyclic.app/notes/delete/${noteID}`,{
        method:"DELETE",
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    })
    fetch("https://shy-gray-gharial-gear.cyclic.app/notes", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then(res=>res.json()).then((res)=>{
          setnote(res)
          console.log(res)}).catch(err => console.log(err))
  }
  return (
    <>
      <h1>all notes</h1>
      {notes?notes.map((el)=>{
        return (
            <div key={el._id}>
            <h2>title:{el.title}</h2>
            <h2>body:{el.body}</h2>
            <button onClick={()=>deletehandler(el._id)}>delete</button>
            <hr />
            </div>
        )
      }):<h1>no notes</h1>}
    </>
  );
};

export default AllNote
