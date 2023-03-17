import { useCallback, useState } from "react";
import {
  ICharacters,
  IResponseCharactersEndpoint,
} from "../../models/endPointsModel";
import handleRequest from "../../utils/handleRequest";

const useGetCharacters = () => {
  const [data, setData] = useState<ICharacters[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    handleRequest({
      method: "get",
      url: `/character`,
      onSuccess: ({ data }: { data: IResponseCharactersEndpoint }) => {
        setData(data.results);
        setIsLoading(false);
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
