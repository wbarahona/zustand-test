import { useGlobalStore } from '../store';

export default function AnotherConsumer() {
  const count = useGlobalStore((state) => state.count);

  return (
    <div className="another-consumer">
      <h2>Another Consumer Component</h2>
      current count: {count}
    </div>
  );
}
