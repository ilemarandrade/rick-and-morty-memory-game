import { useCallback, useState } from "react";
import {
  ICharacters,
  IResponseCharactersEndpoint,
} from "../../models/endPointsModel";
import handleRequest from "../../utils/handleRequest";

const useGetCharacters = () => {
  const [data, setData] = useState<ICharacters[] | void[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    handleRequest({
      method: "get",
      url: `/character`,
      onSuccess: ({ data }: { data: IResponseCharactersEndpoint }) => {
        if (data?.results) {
          setData(data.results);
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  }, []);

  return { getCharacters, data, isLoading };
};

export default useGetCharacters;
