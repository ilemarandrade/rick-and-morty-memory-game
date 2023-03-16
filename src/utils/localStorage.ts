export const KEYSHOWINTRUCTIONS = "show-intructions-key";

export const getKey = (key: string) => localStorage.getItem(key);

export const setKey = ({ key, value }: { key: string; value: string }) =>
  localStorage.setItem(key, value);
