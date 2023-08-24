import Layout from "@/components/Layout";

export default function Jsx() {
  const titulo = <h1>Jsx e um conceito Central</h1>;
  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>;
  }
  return (
    <Layout>
      <div>
        {titulo}
        {subtitulo()}
        <p>{JSON.stringify({ nome: "Joao", idade: 30 })}</p>
      </div>
    </Layout>
  );
}
