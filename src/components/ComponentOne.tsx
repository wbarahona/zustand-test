export default function ComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="component-one">
      <h2>Component One</h2>
      {children}
    </div>
  );
}
