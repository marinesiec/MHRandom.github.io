import { useState } from "react";

export default function RandomPicker({ missions }) {
  const [picked, setPicked] = useState(null);

  const handlePick = () => {
    if (missions.length === 0) return;
    const index = Math.floor(Math.random() * missions.length);
    setPicked(missions[index]);
  };

  return (
    <div>
      <button onClick={handlePick} className="bg-green-500 text-white px-4 py-1 rounded mb-2">
        抽選する
      </button>
      {picked && (
        <div className="border p-3 rounded bg-gray-100">
          🎯 <strong>{picked.title}</strong> - {picked.mission} ({picked.target || "モンスターなし"})
        </div>
      )}
    </div>
  );
}
