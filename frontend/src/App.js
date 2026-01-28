import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Connecting to backend...");

  useEffect(() => {
    axios.get("http://localhost:3001/health")
      .then(res => setMsg(res.data))
      .catch(err => {
        console.error(err);
        setMsg("Backend not connected");
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Cloud Workspace</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
