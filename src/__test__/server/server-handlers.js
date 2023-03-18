import { rest } from "msw";
import environment from "../../utils/environment";
import { getCharacters } from "../data/getCharacters";

const handlers = [
  rest.get(`${environment.API_BASE_URL}/character`, async (req, res, ctx) => {
    const characters = await getCharacters();
    return res(ctx.json(characters));
  }),
];

export { handlers };
