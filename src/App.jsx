import { useState, useEffect } from "react";
import MissionForm from "./components/MissionForm";
import MissionList from "./components/MissionList";
import RandomPicker from "./components/RandomPicker";

function App() {
  const [missions, setMissions] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("missions");
    if (stored) setMissions(JSON.parse(stored));
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("missions", JSON.stringify(missions));
  }, [missions]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ミッション抽選アプリ</h1>
      <MissionForm onAdd={(m) => setMissions([...missions, m])} />
      <MissionList missions={missions} setMissions={setMissions} />
      <RandomPicker missions={missions} />
    </div>
  );
}

export default App;
