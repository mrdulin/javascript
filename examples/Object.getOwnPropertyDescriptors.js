require('core-js/fn/object/get-own-property-descriptors');

const obj = {
  get es7() { return 777; },
  get es8() { return 888; }
};
const descriptors = Object.getOwnPropertyDescriptors(obj);

console.log(descriptors);
