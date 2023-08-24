import Link from "next/link";

export default function Navegador(props) {
  return (
    <div className="bg-blue-400 rounded-xl text-white p-10 m-7 cursor-pointer  ">
      <Link href={props.destino}>{props.texto}</Link>
    </div>
  );
}
