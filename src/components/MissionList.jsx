export default function MissionList({ missions, setMissions }) {
  const handleDelete = (index) => {
    const newMissions = missions.filter((_, i) => i !== index);
    setMissions(newMissions);
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">登録済ミッション</h2>
      {missions.length === 0 && <p>まだ登録されていません。</p>}
      <ul className="space-y-1">
        {missions.map((m, i) => (
          <li key={i} className="border p-2 rounded flex justify-between items-center">
            <div>
              <strong>{m.title}</strong> - {m.mission} ({m.target || "モンスターなし"})
            </div>
            <button onClick={() => handleDelete(i)} className="text-red-600">削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
