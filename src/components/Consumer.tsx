import { useGlobalStore } from '../store';

export default function Consumer() {
  const count = useGlobalStore((state) => state.count);
  const values = useGlobalStore((state) => state.history);

  return (
    <div className="consumer">
      <h2>Consumer Component</h2>
      current count: {count}
      <h3>History of Counts:</h3>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
