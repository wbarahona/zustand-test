export default function ComponentThree({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="component-three">
      <h2>Component Three</h2>
      {children}
    </div>
  );
}
