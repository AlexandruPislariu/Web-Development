/*
    An ordered data structure
    Keeps track of function invocations
    Processed from top to bottom

    Stack Frame Contents:
        function invoked
        parameters of the function
        current line number
*/

var timerId = setTimeout(function () {
  console.log("This function runs in 30 seconds", 30000);
});

setTimeout(function () {
  console.log("Canceling the first setTimeout", timerId);
  clearTimeout(timerId);
}, 2000);
