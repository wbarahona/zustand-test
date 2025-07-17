import { useGlobalStore } from '../store';
import { useFormStore } from '../store/useFormStore';

export default function Consumer() {
  const count = useGlobalStore((state) => state.count);
  const values = useGlobalStore((state) => state.history);
  const { form } = useFormStore();

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
      <h3>Form Data:</h3>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
