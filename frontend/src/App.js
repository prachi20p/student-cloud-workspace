// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [msg, setMsg] = useState("Connecting to backend...");

//   useEffect(() => {
//     axios.get("http://localhost:3001/health")
//       .then(res => setMsg(res.data))
//       .catch(err => {
//         console.error(err);
//         setMsg("Backend not connected");
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Student Cloud Workspace</h1>
//       <h2>{msg}</h2>
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(res => setNotes(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Cloud Workspace</h1>

      {notes.map(note => (
        <div key={note._id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
