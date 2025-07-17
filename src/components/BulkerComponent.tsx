import { useGlobalStore } from '../store';

export default function BulkerComponent() {
  const { count, bulkAdd, reset } = useGlobalStore();

  const handleBulkAdd = () => {
    const values = [5, 10, 15];
    bulkAdd(values);
  };

  return (
    <div className="bulker-component">
      <h1>Current Count: {count}</h1>
      <button className="button" onClick={handleBulkAdd}>
        Bulk Add Values
      </button>
      <button className="button reset" onClick={reset}>
        Reset State
      </button>
    </div>
  );
}
