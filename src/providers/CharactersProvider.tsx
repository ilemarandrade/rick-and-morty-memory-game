import { ReactNode, useEffect } from "react";
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
  const { getCharacters, data: characters } = useGetCharacters();

  useEffect(() => {
    if (pathname === routes.HOME && !characters) {
      getCharacters();
    } else if (pathname !== routes.HOME && !characters) {
      history.push(routes.HOME);
    }
  }, [characters, getCharacters, history, pathname]);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
