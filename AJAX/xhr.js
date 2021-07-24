var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
  if (XHR.readyState === XHR.DONE && XHR.status === 200) {
    console.log(XHR.responseText);
  }
};

XHR.open("GET", "https://api.github.com/zen");
