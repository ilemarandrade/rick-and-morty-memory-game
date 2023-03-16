import Button from "../Button";

const Intructions = () => {
  return (
    <>
      <h1 className="ta-center">Intrucciones</h1>
      <ul>
        <li>Tendrás 3 segundos para memorizar las cartas.</li>
        <li>Una vez volteadas puedes seleccionar 2 cartas.</li>
        <li>Si las cartas abiertas son iguales te sumará puntos a favor.</li>
        <li>
          Si las cartas son diferentes se colocarán como estaban y podrás volver
          a elegir otras dos más.
        </li>
        <li>Procura hacerlo la menor cantidad de intentos.</li>
        <li>Mientras menos intentos/turnos, más memoria tienes!</li>
      </ul>
      <div className="perfect-centered mb-1-5">
        <input type="checkbox" id="miCheckbox" />
        <label htmlFor="miCheckbox">No volver a ver las instrucciones</label>
      </div>
      <div className="perfect-centered">
        <Button label="Empezar" />
      </div>
    </>
  );
};

export default Intructions;
