export const symbols = [
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
];

export function uniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}
