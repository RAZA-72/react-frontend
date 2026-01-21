export const setDeepValue = (obj, path, value) => {
  const keys = path.split(".");
  let current = obj;

  keys.forEach((key, i) => {
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) current[key] = {};
      current = current[key];
    }
  });
};
