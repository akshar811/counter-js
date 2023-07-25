
let smile = 0;
let id = setInterval(() => {
  smile = smile + 1
  if (smile == 100) {
    clearInterval(id);
  }
  document.getElementById("smile").innerHTML = +smile

}, 200)


let smile2 = 0;
let id2 = setInterval(() => {
  smile2 = smile2 + 1
  if (smile2 == 200) {
    clearInterval(id2);
  }
  document.getElementById("smile2").innerHTML = +smile2

}, 100)

let smile3 = 0;
let id3 = setInterval(() => {
  smile3 = smile3 + 1
  if (smile3 == 300) {
    clearInterval(id3);
  }
  document.getElementById("smile3").innerHTML = +smile3

}, 50)

let smile4 = 0;
let id4 = setInterval(() => {
  smile4 = smile4 + 1
  if (smile4 == 400) {
    clearInterval(id4);
  }
  document.getElementById("smile4").innerHTML = +smile4

}, 50)