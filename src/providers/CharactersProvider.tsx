import Loading from "../components/Loading";
import { ReactNode, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import routes from "../constants/routes";
import CharactersContext from "../contexts/CharactersContext";
import useGetCharacters from "../hooks/api/useGetCharacter";

interface Props {
  children: ReactNode;
}
const CharactersProvider = ({ children }: Props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const isPlaying = pathname === routes.PLAY;
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { getCharacters, data: characters, isLoading } = useGetCharacters();
  const [success, setSuccess] = useState(0);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    if (isFirstRender) {
      setTimeout(() => {
        setIsFirstRender(false);
      }, 2000);
    }
    if (pathname === routes.HOME && !characters) {
      getCharacters();
    } else if (pathname !== routes.HOME && !characters) {
      history.push(routes.HOME);
    }
  }, [characters, getCharacters, history, isFirstRender, pathname]);

  useEffect(() => {
    if (pathname !== routes.PLAY) {
      setSuccess(0);
    } else {
      setTurns(0);
    }
  }, [pathname]);
  return (
    <CharactersContext.Provider
      value={{ characters, success, setSuccess, turns, setTurns, isPlaying }}
    >
      {(isFirstRender || isLoading) && <Loading isWelcome={isFirstRender} />}
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
