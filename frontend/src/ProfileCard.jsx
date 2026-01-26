export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="p-4 shadow rounded">
      <h2 className="text-xl font-bold">{user.handle}</h2>
      <p>Rating: {user.rating}</p>
      <p>Max Rating: {user.maxRating}</p>
      <p>Rank: {user.rank}</p>
      <p>Solved: {user.solvedCount}</p>
    </div>
  );
}