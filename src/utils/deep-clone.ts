// Function to deal with deep states
export const deepClone = (item: object) => {
  let clone = JSON.parse(JSON.stringify(item));
  return clone;
}
