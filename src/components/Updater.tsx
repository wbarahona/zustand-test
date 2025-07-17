import { useGlobalStore } from '../store';

export default function Updater() {
  const increment = useGlobalStore((state) => state.increment);
  const decrement = useGlobalStore((state) => state.decrement);
  const count = useGlobalStore((state) => state.count);

  function handleIncrement() {
    increment();
  }

  function handleDecrease() {
    decrement();
  }

  return (
    <div className="updater">
      <h2>Updater Component</h2>
      <button className="button" onClick={handleDecrease}>
        -
      </button>
      <span className="center count">{count}</span>
      <button className="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
