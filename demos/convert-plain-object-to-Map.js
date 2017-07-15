require('core-js/fn/object/entries');

function objToMap(obj) {
  const entries = Object.entries(obj);
  return new Map(entries);
}

module.exports = objToMap;
