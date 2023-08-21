export default function Jsx() {
  const a = 3;
  const b = 4;

  return (
    <div>
      <h1>Jsx e um conceito Central</h1>
      <h2> {"muito legal".toUpperCase()}</h2>
      <p>{JSON.stringify({ nome: "Joao", idade: 30 })}</p>
    </div>
  );
}
