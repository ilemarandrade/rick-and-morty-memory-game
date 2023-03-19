export interface ICharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  open?: boolean;
  position?: number;
}
export interface IResponseCharactersEndpoint {
  results: ICharacters[];
}
