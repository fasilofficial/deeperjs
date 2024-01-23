const deepClone = (obj, cache = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (cache.has(obj)) {
    return cache.get(obj);
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    cache.set(obj, arrCopy);

    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i], cache);
    }

    return arrCopy;
  }

  const objCopy = {};
  cache.set(obj, objCopy);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key], cache);
    }
  }

  return objCopy;
};

module.exports = { deepClone };
