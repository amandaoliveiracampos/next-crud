import Link from "next/link";

export default function Estiloso() {
  return (
    <div className="bg-purple-300 text-white ">
      <Link href="/inicio"> Voltar</Link>
      <h1>Estiloso Usando CSS Modulos</h1>
    </div>
  );
}
