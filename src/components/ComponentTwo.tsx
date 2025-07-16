import { useGlobalStore } from '../store';

export default function ComponentTwo({
  children,
}: {
  children: React.ReactNode;
}) {
  const count = useGlobalStore((state) => state.count);

  return (
    <div className="component-two">
      <h2>Component Two</h2>
      <p>Current count: {count}</p>
      {children}
    </div>
  );
}
