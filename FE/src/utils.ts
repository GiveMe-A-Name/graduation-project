export const getImage = (name: string): string => {
  return new URL(`assets/${name}.png`, import.meta.url).href;
};
