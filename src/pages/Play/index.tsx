import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GameBoard from "../../components/GameBoard";
import { ICharacters } from "../../components/models/endPointsModel";
import { AllNumberKeys } from "../../components/models/generics";
import routes from "../../constants/routes";
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
  const history = useHistory();
  const { characters, success, setSuccess, turns, setTurns } =
    useCharactersState();
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
          setSuccess(success + 1);
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
        setTurns(turns + 1);
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

  useEffect(() => {
    if (!charactersState?.length) {
      history.push(routes.GAMEOVER);
    }
  }, [charactersState?.length, history]);

  return (
    <>
      <div className="d-flex jc-space-between">
        <h2 className="mb-1-5">{`Aciertos: ${success}`}</h2>
        <h2 className="mb-1-5">{`Turnos: ${turns}`}</h2>
      </div>
      {charactersState && (
        <GameBoard data={charactersState} onClickToCard={openCard} />
      )}
    </>
  );
};

export default Play;
