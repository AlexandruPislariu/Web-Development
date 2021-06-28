/*
    An object that represents a task that will be completed in the future

*/
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then(function (data) {
  console.log("Random int passed to resolve: ", data);
});
