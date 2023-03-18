import { useEffect } from "react";
import routes from "../constants/routes";

const useWatcherToResetGame = (
  pathname: string,
  setMatchesGot: (n: number) => void,
  setTurns: (n: number) => void
) => {
  useEffect(() => {
    if (pathname !== routes.PLAY) {
      setMatchesGot(0);
    } else {
      setTurns(0);
    }
  }, [pathname, setMatchesGot, setTurns]);
};

export default useWatcherToResetGame;
