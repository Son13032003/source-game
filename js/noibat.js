var img = [];
var songuyen = 2;
function loading() {
  for (let i = 0; i < 3; i++) {
    img[i] = "../images/bannerthit" + i + ".png";
  }
  var anh = document.getElementById("slidershowone");
  anh.style.background= "url("+img[songuyen]+")";
  setInterval(sau,3000);
}
function truoc() {
  var anh = document.getElementById("slidershowone")
  anh.style.background= "url("+img[songuyen]+")";
  document.querySelector(".text").innerHTML = songuyen+" / 4";
  if (songuyen == 0) {
    songuyen = img.length;
  }
  songuyen--
}
function sau() {
  var anh = document.getElementById("slidershowone");
  if (songuyen == img.length) {
    songuyen = 0;
  }
  anh.style.background= "url("+img[songuyen]+")";
  songuyen++
}
