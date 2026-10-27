import { useState, type FormEvent } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask = task.trim();
    if (!newTask) return;

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTask("");
  }

  return (
    <main className="page">
      <h1>My Task Tracker</h1>
      <p>Add tasks and keep track of what you need to do.</p>

      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
          aria-label="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
