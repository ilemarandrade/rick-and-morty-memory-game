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
  const [isBlockOnClick, setIsBlockOnClick] = useState(false);
  const [cardOpen, setCardOpen] = useState<number | false>(false);
  const [charactersState, setCharactersState] = useState(() => {
    const value = randomCharacters(characters)?.map(({ ...keys }, index) => ({
      ...keys,
      open: true,
      position: index,
    }));
    return value;
  });
  const verifyMath = (id: number) => {
    if (!cardOpen) {
      setCardOpen(id);
      return;
    } else {
      setIsBlockOnClick(true);
      setTimeout(() => {
        if (cardOpen === id) {
          setCharactersState((prev) =>
            prev?.filter((currentCharacter) => currentCharacter.id !== id)
          );
        } else {
          setCharactersState((prev) =>
            prev?.map((currentCharacter) => ({
              ...currentCharacter,
              open: false,
            }))
          );
        }
        setCardOpen(false);
        setIsBlockOnClick(false);
      }, 1000);
    }
  };
  const closeAll = () => {
    setCharactersState(
      charactersState?.map(({ ...values }) => ({
        ...values,
        open: false,
      }))
    );
  };

  const openCard = ({ position, id }: AllNumberKeys) => {
    if (isBlockOnClick) {
      return;
    }
    setCharactersState((prev) =>
      prev?.map((currentCharacter) =>
        currentCharacter.position === position
          ? { ...currentCharacter, open: true }
          : currentCharacter
      )
    );
    verifyMath(id);
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
