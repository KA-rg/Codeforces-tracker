import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function RatingChart({ contests }) {
  return (
    <LineChart width={600} height={300} data={contests}>
      <XAxis dataKey="contestName" hide />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="newRating" />
    </LineChart>
  );
}