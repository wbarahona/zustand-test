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
      <button onClick={handleDecrease}>-</button> {count}{' '}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
