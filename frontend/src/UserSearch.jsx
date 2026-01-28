import { useState } from "react";
import { trackUser } from "../services/api";

export default function UserSearch({ setUser }) {
  const [handle, setHandle] = useState("");

  const submit = async () => {
    const res = await trackUser(handle);
    setUser(res.data);
  };

  return (
    <div className="flex gap-2">
      <input
        className="border p-2"
        placeholder="Codeforces handle"
        onChange={e => setHandle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4" onClick={submit}>
        Track
      </button>
    </div>
  );
}