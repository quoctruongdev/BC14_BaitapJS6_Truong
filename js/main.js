// Thêm số nguyên vào mảng
document.getElementById("themSo").addEventListener("click", tinhToan);
var arrayAll = [];
function tinhToan() {
  
  var number = document.getElementById("soNguyen").value;
  var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = "";
  var pEL = document.createElement("p");
  var convertNumber = number.split(",");
  if (number != "") {
    arrayAll.push(+convertNumber);
    pEL.innerHTML = "Các thành phần trong mảng: " + "[" + arrayAll + "]";
  } else {
    pEL.innerHTML = "Các thành phần trong mảng: " + "[" + arrayAll + "]";
  }
  ketQua.appendChild(pEL);
  $(':input').val('');
}

// Tìm số nhỏ nhất và số nguyên dương nhỏ nhất
document.getElementById("min").addEventListener("click", soMin);
function soMin() {
  var spanMin = document.createElement("p");
  var spanMin2 = document.createElement("p");
  ketQua.innerHTML = "";
  var min = Math.min.apply(null, arrayAll);
  spanMin.innerHTML = "Số nguyên nhỏ nhất trong mảng: " + min;
  var arrayTemp = []
  for (var j = 0; j < arrayAll.length ; j++){
    if (arrayAll[j] >  0) {
      arrayTemp.push(+arrayAll[j]);
      var minDuong = Math.min.apply(null, arrayTemp);
      spanMin2.innerHTML = "Số nguyên dương nhỏ nhất trong mảng: " + minDuong;
      ketQua.appendChild(spanMin);
      ketQua.appendChild(spanMin2);
    }
  }  
}

$("#soNguyen").click(function () {
  this.value = "";
});

// Tính tổng  và đếm số nguyên dương trong mảng
document.getElementById("tinhTong").addEventListener("click", tinhTong);
function tinhTong() {
  var spanEL = document.createElement("p");
  // var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = "";
  tong = 0;
  count = 0;
  for (var i = 0; i < arrayAll.length; i++) {
    if (arrayAll[i] > 0) {
      count++;
      tong += arrayAll[i];
      spanEL.innerHTML =
        "Tổng của: " + ('',count) + " số nguyên dương trong mảng bằng: " + tong;
      ketQua.appendChild(spanEL);
    }
  }
}

//Clear data
document.getElementById("clear").addEventListener('click', clearData);
function clearData() {
  $(':input').val('');
  arrayAll = [];
  arrayTemp = []
  ketQua.innerHTML= ""
}


      

