import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const loadFiles = () => {
    axios.get("http://localhost:3001/files")
      .then(res => setFiles(res.data));
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file ❌");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://localhost:3001/files", formData);
    setFile(null);
    loadFiles();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Cloud Workspace</h1>

      <h2>Upload File</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>

      <h2>Your Files</h2>
      {files.map(f => (
        <p key={f}>📄 {f}</p>
      ))}
    </div>
  );
}

export default App;
