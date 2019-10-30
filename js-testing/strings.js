export function reverseString(str) {
  if (typeof str !== "string") return "";

  str = str
    .split("")
    .reverse()
    .join("");
  return str;
}

export function getWords(sentence) {
  let words = sentence.split(" ");
  return words;
}
