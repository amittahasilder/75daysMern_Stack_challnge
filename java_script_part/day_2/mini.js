function checkType(value) {
  if (value === null) return "Null";

  if (Array.isArray(value)) return "Array";

  return typeof value;
}

// Test
console.log(checkType("Amit"));
console.log(checkType(100));
console.log(checkType([1,2,3]));
console.log(checkType({name: "Amit"}));
console.log(checkType(null));