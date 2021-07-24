$.ajax({
  method: "GET",
  url: "api.com",
})
  .done(function (data) {
    console.log(data);
  })
  .fail(function () {
    console.log("Failed!");
  });
