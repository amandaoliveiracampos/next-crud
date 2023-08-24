import Navegador from "@/components/Navegador";

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-wrap">
        <Navegador texto="Estiloso" destino="/estiloso"></Navegador>
        <Navegador texto="Exemplo" destino="/exemplo"></Navegador>
        <Navegador texto="JSX" destino="/jsx"></Navegador>
      </div>
    </div>
  );
}
