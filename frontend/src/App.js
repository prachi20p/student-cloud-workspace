import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [taskText, setTaskText] = useState("");

  const loadNotes = () => {
    axios.get("http://localhost:3001/notes")
      .then(res => setNotes(res.data));
  };

  const loadTasks = () => {
    axios.get("http://localhost:3001/tasks")
      .then(res => setTasks(res.data));
  };

  useEffect(() => {
    loadNotes();
    loadTasks();
  }, []);

  const saveNote = async () => {
  if (title.trim() === "" || content.trim() === "") {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(600, context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.15);
    
    return;
  }

  await axios.post("http://localhost:3001/notes", {
    title,
    content
  });

  setTitle("");
  setContent("");
  loadNotes();
};


  const saveTask = async () => {
  if (taskText.trim() === "") {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(600, context.currentTime); 
    oscillator.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.15); 

    return;
  }

  await axios.post("http://localhost:3001/tasks", { text: taskText });
  setTaskText("");
  loadTasks();
};


  return (
    <div style={{ padding: 20 }}>
      <h1>Student Cloud Workspace</h1>

      <h2>Create Note</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <br /><br />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <br /><br />
      <button onClick={saveNote}>Save Note</button>

      <h2>Your Notes</h2>
      {notes.map(n => (
        <div key={n._id}>
          <h4>{n.title}</h4>
          <p>{n.content}</p>
        </div>
      ))}

      <hr />

      <h2>Create Task</h2>
      <input placeholder="Task..." value={taskText} onChange={e => setTaskText(e.target.value)} />
      <button onClick={saveTask}>Add Task</button>

      <h2>Your Tasks</h2>
      {tasks.map(t => (
        <p key={t._id}>• {t.text}</p>
      ))}
    </div>
  );
}

export default App;
