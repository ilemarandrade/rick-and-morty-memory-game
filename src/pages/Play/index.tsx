import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import GameBoard from "../../components/GameBoard";
import { AllNumberKeys } from "../../models/generics";
import routes from "../../constants/routes";
import Instructions from "../../components/Instructions";
import { KEY_SHOW_INTRUCTIONS, setKey } from "../../utils/localStorage";
import { useGameControlState } from "../../contexts/GameControlContext";
import useCardsOnTheBoard from "../../hooks/useCardsOnTheBoard";

const MAX_CARD_MATCHES = 5;
const TIME_WHILE_COMPARING = 1000;
const TIME_TO_CLOSE_ALL_CARDS = 3000;

const Play = () => {
  const history = useHistory();
  const {
    characters,
    matchesGot,
    setMatchesGot,
    turns,
    setTurns,
    showIntructions,
  } = useGameControlState();

  const [play, setPlay] = useState(false);
  const [isBlockOnClick, setIsBlockOnClick] = useState(false);
  const [firstOpenCard, setFirstOpenCard] = useState<number | false>(false);
  const [cardsOnTheBoard, setCardsOnTheBoard] = useCardsOnTheBoard(characters);

  const verifyMatch = (id: number) => {
    setIsBlockOnClick(true);
    setTimeout(() => {
      if (firstOpenCard === id) {
        setCardsOnTheBoard((prev) =>
          prev.map((currentCharacter) =>
            currentCharacter.id === id
              ? {
                  ...currentCharacter,
                  wasFound: true,
                }
              : currentCharacter
          )
        );
        setMatchesGot(matchesGot + 1);
        if (matchesGot === MAX_CARD_MATCHES) {
          history.push(routes.GAMEOVER);
        }
      } else {
        setCardsOnTheBoard((prev) =>
          prev.map((currentCharacter) => ({
            ...currentCharacter,
            open: false,
          }))
        );
      }
      setFirstOpenCard(false);
      setIsBlockOnClick(false);
      setTurns(turns + 1);
    }, TIME_WHILE_COMPARING);
  };

  const openCard = ({ position, id }: AllNumberKeys) => {
    if (isBlockOnClick) {
      return;
    }

    setCardsOnTheBoard((prev) =>
      prev.map((currentCharacter) =>
        currentCharacter.position === position
          ? { ...currentCharacter, open: true }
          : currentCharacter
      )
    );

    if (!firstOpenCard) {
      setFirstOpenCard(id);
    } else {
      verifyMatch(id);
    }
  };

  // Funtion to init game
  const onPlay = (showIntructionsAgain: boolean) => {
    if (showIntructionsAgain) {
      setKey({ key: KEY_SHOW_INTRUCTIONS, value: "not" });
    }

    setPlay(true);
  };

  const closeAll = useCallback(() => {
    setCardsOnTheBoard(
      cardsOnTheBoard.map(({ ...values }) => ({
        ...values,
        open: false,
        wasFound: false,
      }))
    );
  }, [cardsOnTheBoard, setCardsOnTheBoard]);

  useEffect(() => {
    if (!showIntructions) {
      setPlay(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timerToCloseAllCards: NodeJS.Timeout;
    if (play) {
      timerToCloseAllCards = setTimeout(() => {
        closeAll();
      }, TIME_TO_CLOSE_ALL_CARDS);
    }
    return () => {
      if (timerToCloseAllCards) {
        clearTimeout(timerToCloseAllCards);
      }
    };
  }, [closeAll, play]);

  return (
    <>
      {showIntructions && !play ? (
        <Instructions onClickPlay={onPlay} />
      ) : (
        <>
          <div className="d-flex jc-space-between">
            <h2 className="mb-1-5">{`Aciertos: ${matchesGot}`}</h2>
            <h2 className="mb-1-5">{`Turnos: ${turns}`}</h2>
          </div>
          {cardsOnTheBoard.length && (
            <GameBoard cardsData={cardsOnTheBoard} onClickToCard={openCard} />
          )}
        </>
      )}
    </>
  );
};

export default Play;
