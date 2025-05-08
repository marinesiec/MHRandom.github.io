import { useState } from "react";

export default function MissionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [mission, setMission] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !mission) return;
    onAdd({ title, mission, target });
    setTitle("");
    setMission("");
    setTarget("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <input placeholder="ゲームタイトル" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-1 w-full" />
      <input placeholder="ミッション名" value={mission} onChange={(e) => setMission(e.target.value)} className="border p-1 w-full" />
      <input placeholder="討伐対象モンスター（任意）" value={target} onChange={(e) => setTarget(e.target.value)} className="border p-1 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">追加</button>
    </form>
  );
}
