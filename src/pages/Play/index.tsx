import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import GameBoard from "../../components/GameBoard";
import { ICharacters } from "../../models/endPointsModel";
import { AllNumberKeys } from "../../models/generics";
import routes from "../../constants/routes";
import { useCharactersState } from "../../contexts/CharactersContext";
import Instructions from "../../components/Instructions";
import { KEYSHOWINTRUCTIONS, setKey } from "../../utils/localStorage";

const randomCharacters = (characters: ICharacters[] | null) => {
  const randomAllCharacters = characters?.sort(() => 0.5 - Math.random());
  if (randomAllCharacters) {
    return [
      ...randomAllCharacters?.slice(0, 6),
      ...randomAllCharacters?.slice(0, 6),
    ]?.sort(() => 0.5 - Math.random());
  }
  return;
};

const Play = () => {
  const history = useHistory();
  const { characters, success, setSuccess, turns, setTurns, showIntructions } =
    useCharactersState();
  const [play, setPlay] = useState(false);
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
            prev?.map((currentCharacter) =>
              currentCharacter.id === id
                ? {
                    ...currentCharacter,
                    wasFound: true,
                  }
                : currentCharacter
            )
          );
          if (success === 5) {
            history.push(routes.GAMEOVER);
          } else {
            setSuccess(success + 1);
          }
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
  const closeAll = useCallback(() => {
    setCharactersState(
      charactersState?.map(({ ...values }) => ({
        ...values,
        open: false,
        wasFound: false,
      }))
    );
  }, [charactersState]);

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

  const onPlay = (showIntructionsAgain: boolean) => {
    if (showIntructionsAgain) {
      setKey({ key: KEYSHOWINTRUCTIONS, value: "not" });
    }
    setPlay(true);
  };
  useEffect(() => {
    if (play) {
      setTimeout(() => {
        closeAll();
      }, 3000);
    }
    if (!showIntructions) {
      setPlay(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play, showIntructions]);

  return (
    <>
      {showIntructions && !play ? (
        <Instructions onClickPlay={onPlay} />
      ) : (
        <>
          <div className="d-flex jc-space-between">
            <h2 className="mb-1-5">{`Aciertos: ${success}`}</h2>
            <h2 className="mb-1-5">{`Turnos: ${turns}`}</h2>
          </div>
          {charactersState && (
            <GameBoard data={charactersState} onClickToCard={openCard} />
          )}
        </>
      )}
    </>
  );
};

export default Play;
