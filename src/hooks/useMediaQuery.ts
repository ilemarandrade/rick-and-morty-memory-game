import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: any) => {
  const [size, setSize] = useState(window.innerWidth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const breakPoints = {
    down: (value: number) => size < value,
    up: (value: number) => size > value,
    between: (a: number, b: number) => size > a && size < b,
  };
  const [response, setResponse] = useState(() => {
    if (mediaQuery) {
      return mediaQuery(breakPoints);
    }
    return false;
  });
  const updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setResponse(mediaQuery(breakPoints));
  }, [breakPoints, mediaQuery, size]);
  return response;
};

export default useMediaQuery;
