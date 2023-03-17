export interface ICharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  open?: boolean;
}
export interface IResponseCharactersEndpoint {
  results: ICharacters[];
}
