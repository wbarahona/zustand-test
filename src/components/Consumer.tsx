import { useGlobalStore } from '../store';

export default function Consumer() {
  const count = useGlobalStore((state) => state.count);

  return (
    <div className="consumer">
      <h2>Consumer Component</h2>
      current count: {count}
    </div>
  );
}
