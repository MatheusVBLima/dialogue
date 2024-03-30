export default function meeting({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Meeting Room: #{params.id}</h1>
    </div>
  );
}
