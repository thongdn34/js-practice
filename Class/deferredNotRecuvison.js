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
    this.temp = '';
  }

  then(func) {
    this.promisese.push(func);
  }

  resolve(val) {
    if (!this.promisese.length) {
      return
    }

    for (let i = 0; i < this.promisese.length; i++) {
      val = this.promisese[i](val);
      if (val instanceof Deferred) {
        val.promisese = this.promisese.slice(i + 1)
        return
      }
    }
  }
}

var d = new Deferred();
d.then(function (res) {
  console.log('1', res);
  const d1 = new Deferred();
  setTimeout(() => {
    d1.resolve("a");
  }, 1500);
  return d1;
});
d.then(function (res) {
  console.log('2', res);
  return 'b';
});
d.then(function (res) {
  console.log('3', res);
  return 'c';
});
d.resolve('hello');
