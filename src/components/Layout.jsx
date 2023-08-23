import Link from "next/link";

export default function Layout(props) {
  return (
    <div className="flex flex-col  ">
      <div className="flex justify-end  bg-slate-200">
        <Link className="bg-red-200 px-8 my-7 m-12 rounded-lg " href="/">
          Voltar
        </Link>
      </div>
      <div className=" my-8 mx-7 text-center  h-screen  text-white bg-slate-800 ">
        {props.children}
      </div>
    </div>
  );
}
