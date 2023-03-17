/* eslint-disable import/prefer-default-export */
import characters from "./characters.json";

const data = { ...characters };

/**
 * Return a mock of the characters data.
 *
 * @returns {object} The mock of the characters data.
 */
async function getCharacters() {
  return data;
}

export { getCharacters };
