export interface ICharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
  open?: boolean;
}
export interface IResponseCharactersEndpoint {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacters[];
}
