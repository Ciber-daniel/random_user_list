export const sleep = function (m: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, m));
};

export function getRandomFromArray(array: Array<string>) {
  return array[Math.floor(Math.random() * array.length)];
}