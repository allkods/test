let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

// Both the object will Contain same value
// Explanation :

// Array and Object in Javascript is passed in another variable or function as reference.
// Instead of holding the value of obj1, obj2 is holding the reference to obj1.