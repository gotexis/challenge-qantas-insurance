const lowerCaseChars: string = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars: string = lowerCaseChars.toUpperCase();
const numberChars: string = "0123456789";

const allCapsAlpha: string[] = upperCaseChars.split("");
const allLowerAlpha: string[] = lowerCaseChars.split("");
const allNumbers: string[] = numberChars.split("");

const base: string[] = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];

export const idGenerator = (length: number = 16): string => {
  return [...Array(length)]
    .map((i) => base[Math.floor(Math.random() * base.length)])
    .join("");
};
