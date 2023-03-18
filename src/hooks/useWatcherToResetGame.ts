import { useEffect } from "react";
import { useLocation } from "react-router";
import routes from "../constants/routes";
import { useGameControlState } from "../contexts/GameControlContext";

const useWatcherToResetGame: () => void = () => {
  const { setMatchesGot, setTurns } = useGameControlState();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== routes.PLAY) {
      setMatchesGot(0);
    } else {
      setTurns(0);
    }
  }, [pathname, setMatchesGot, setTurns]);
};

export default useWatcherToResetGame;
