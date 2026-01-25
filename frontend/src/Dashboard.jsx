import { useState } from "react";
import UserSearch from "../components/UserSearch";
import ProfileCard from "../components/ProfileCard";
import RatingChart from "../components/RatingChart";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  return (
    <div className="p-6">
      <UserSearch setUser={setUser} />
      <ProfileCard user={user} />
      {user && <RatingChart contests={user.contests} />}
    </div>
  );
}