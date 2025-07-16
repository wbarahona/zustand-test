import { useGlobalStore } from '../store';

export interface IComponentTwoProps {
  children?: React.ReactNode;
}

export default function ComponentTwo({
  children,
}: IComponentTwoProps): React.ReactElement<IComponentTwoProps> {
  const count = useGlobalStore((state) => state.count);

  return (
    <div className="component-two">
      <h2>Component Two</h2>
      <p>Current count: {count}</p>
      {children}
    </div>
  );
}
