// const htmlCode = document.querySelector("#html").value;
// const cssCode = document.querySelector("#Css").value;
// const JsCode = document.querySelector("#Js").value;
// const Output = document.querySelector(".output");

function InputCode() {
  console.log("hello");
  let htmlCode = document.getElementById("html").value;
  let cssCode = document.getElementById("Css").value;
  let JsCode = document.getElementById("Js").value;
  let Output = document.getElementById("output");

  Output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

  Output.contentWindow.eval(JsCode);
  saveData();

  function saveData() {
    localStorage.setItem("htmldata", htmlCode.innerHTML);
    localStorage.setItem("cssdata", cssCode.innerHTML);
    localStorage.setItem("Jsdata", JsCode.innerHTML);
    localStorage.setItem("outputdata", Output.innerHTML);
  }
  function getData() {
    htmlCode.innerHTML = localStorage.getItem("htmldata");
    cssCode.innerHTML = localStorage.getItem("cssdata");
    JsCode.innerHTML = localStorage.getItem("Jsdata");
    Output.innerHTML = localStorage.getItem("outputdata");
  }
  getData();
}

function toggleBtn() {
  let Circle = document.querySelector(".circle");
  Circle.classList.toggle("circle-right");
  let outPutBody = document.querySelector(".right");
  outPutBody.classList.toggle("output-color");
}
