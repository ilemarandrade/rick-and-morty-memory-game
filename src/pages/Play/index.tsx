import { useEffect, useState } from "react";
import GameBoard from "../../components/GameBoard";
import { ICharacters } from "../../components/models/endPointsModel";
import { AllNumberKeys } from "../../components/models/generics";
import { useCharactersState } from "../../contexts/CharactersContext";

const randomCharacters = (characters: ICharacters[] | null) => {
  if (characters) {
    return [...characters?.slice(0, 6), ...characters?.slice(0, 6)]?.sort(
      () => 0.5 - Math.random()
    );
  }
  return;
};

const Play = () => {
  const { characters } = useCharactersState();
  const [charactersState, setCharactersState] = useState(() => {
    const value = randomCharacters(characters)?.map(({ ...keys }, index) => ({
      ...keys,
      open: true,
      position: index,
    }));
    return value;
  });
  const closeAll = () => {
    setCharactersState(
      charactersState?.map(({ ...values }) => ({
        ...values,
        open: false,
      }))
    );
  };

  const openCard = ({ position, id }: AllNumberKeys) => {
    setCharactersState((prev) =>
      prev?.map((currentCharacter) =>
        currentCharacter.position === position
          ? { ...currentCharacter, open: true }
          : currentCharacter
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      closeAll();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex jc-space-between">
        <h2 className="mb-1-5">Aciertos:</h2>
        <h2 className="mb-1-5">Turnos:</h2>
      </div>
      {charactersState && (
        <GameBoard data={charactersState} onClickToCard={openCard} />
      )}
    </>
  );
};

export default Play;
