import Loading from "../components/Loading";
import { ReactNode, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import routes from "../constants/routes";
import GameControlContext from "../contexts/GameControlContext";
import useGetCharacters from "../hooks/api/useGetCharacter";

const TIME_TO_REMOVE_LOADING = 2000;

interface Props {
  children: ReactNode;
}

const GameControlProvider = ({ children }: Props) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [matchesGot, setMatchesGot] = useState(0);
  const [turns, setTurns] = useState(0);

  const history = useHistory();
  const { pathname } = useLocation();
  const { getCharacters, data: characters, isLoading } = useGetCharacters();

  // UseEffect  with the purpose of obtaining the characters
  // and avoid showing disallowed views when the characters do not exist
  useEffect(() => {
    if (pathname === routes.HOME && !characters) {
      getCharacters();
    } else if (pathname !== routes.HOME && !characters) {
      history.push(routes.HOME);
    }
  }, [characters, getCharacters, history, isFirstRender, pathname]);

  // UseEffect with the purpose of reset game when finish game
  // TODO improve this useEffect
  useEffect(() => {
    if (pathname !== routes.PLAY) {
      setMatchesGot(0);
    } else {
      setTurns(0);
    }
  }, [pathname]);

  // UseEffect with the purpose of removing the Loading 2 seconds after starting the app
  useEffect(() => {
    let timerToRemoveLoading: NodeJS.Timeout | undefined;

    if (isFirstRender) {
      timerToRemoveLoading = setTimeout(() => {
        setIsFirstRender(false);
      }, TIME_TO_REMOVE_LOADING);
    }

    return () => {
      if (timerToRemoveLoading) {
        clearTimeout(timerToRemoveLoading);
      }
    };
  }, [isFirstRender]);

  return (
    <GameControlContext.Provider
      value={{ characters, matchesGot, setMatchesGot, turns, setTurns }}
    >
      {(isFirstRender || isLoading) && <Loading isWelcome={isFirstRender} />}
      {children}
    </GameControlContext.Provider>
  );
};

export default GameControlProvider;
