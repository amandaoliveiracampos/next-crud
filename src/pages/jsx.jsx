export default function Jsx() {
  const titulo = <h1>Jsx e um conceito Central</h1>;
  return (
    <div>
      {titulo}
      <h2> {"muito legal".toUpperCase()}</h2>
      <p>{JSON.stringify({ nome: "Joao", idade: 30 })}</p>
    </div>
  );
}
