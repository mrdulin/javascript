function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepCopy(o) {
  var out, v, key;
  out = Array.isArray(o) ? [] : {};
  for (key in o) {
      v = o[key];
      out[key] = (typeof v === "object") ? deepCopy(v) : v;
  }
  return out;
}

module.exports = {
  deepClone,
  deepCopy
}
