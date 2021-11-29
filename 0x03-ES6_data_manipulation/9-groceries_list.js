export default function groceriesList() {
  const toMap = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const map = new Map();
  Object.entries(toMap).forEach((item) => {
    map.set(item[0], item[1]);
  });
  return map;
}
