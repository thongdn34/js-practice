// Write the class Deferred
// usage example
// var d = new Deferred();
// d.then(function(res) {
//   console.log("1", res);
//   return "a";
// })
// d.then(function(res) {
//   console.log("2", res);
//   return "b";
// })
// d.then(function(res) {
//   console.log("3", res);
//   return "c";
// })

// d.resolve("Hello")
// 1 hello
// 2 a
// 3 b


class Deferred {
  constructor() {
    this.promisese = [];
  }

  then(func) {
    this.promisese.push(func);
  }

  resolve(input) {
    let func = this.promisese.shift();

    if (func) {
      let n = func(input);
      if (n instanceof Deferred) {
        n.then(v => this.resolve(v))
      } else this.resolve(n)
    }
  }
}

var d = new Deferred();
d.then(function(res) {
  console.log("1", res);
  return "a";
})
d.then(function(res) {
  console.log("2", res);
  return "b";
})
d.then(function(res) {
  console.log("3", res);
  return "c";
})