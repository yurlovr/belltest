function throwError() {
  throw new Error('Incorrect data structure. Must be Array of { name, id, items: [{ name, id }, ...] }');
}

export default function flatten(array) {
  let result = [];
  if (!Array.isArray(array)) {
    throwError();
  }
  array.forEach((item) => {
    const { id, name, items } = item;
    if (!id || !name) {
      throwError();
    }
    result = result.concat({
      id,
      name,
    });
    if (items && items.length) {
      items.forEach((i) => {
        result = result.concat({
          id: i.id,
          name: i.name,
        });
      });
    }
  });
  return result;
}
