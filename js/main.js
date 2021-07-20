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
  $(":input").val("");
}

// Tìm số nhỏ nhất và số nguyên dương nhỏ nhất
document.getElementById("min").addEventListener("click", soMin);
function soMin() {
  var ketQua1 = document.getElementById("ketQua1");
  var spanMin = document.createElement("p");
  var spanMin2 = document.createElement("p");
  ketQua1.innerHTML = "";
  var min = Math.min.apply(null, arrayAll);
  spanMin.innerHTML = "Số nguyên nhỏ nhất trong mảng: " + min;
  var arrayTemp = [];
  for (var j = 0; j < arrayAll.length; j++) {
    if (arrayAll[j] > 0) {
      arrayTemp.push(+arrayAll[j]);
      var minDuong = Math.min.apply(null, arrayTemp);
      spanMin2.innerHTML = "Số nguyên dương nhỏ nhất trong mảng: " + minDuong;
      ketQua1.appendChild(spanMin);
      ketQua1.appendChild(spanMin2);
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
  var spanEL2 = document.createElement("p");
  var ketQua1 = document.getElementById("ketQua1");
  ketQua1.innerHTML = "";
  tong = 0;
  count = 0;
  for (var i = 0; i < arrayAll.length; i++) {
    if (arrayAll[i] > 0) {
      count++;
      tong += arrayAll[i];
      spanEL.innerHTML =
        "Tổng của các số nguyên dương trong mảng bằng: " + tong;
      spanEL2.innerHTML = "Có tất cả " + count + " số nguyên dương trong mảng";
      ketQua1.appendChild(spanEL);
      ketQua1.appendChild(spanEL2);
    }
  }
}

//Clear data
document.getElementById("clear").addEventListener("click", clearData);
function clearData() {
  $(":input").val("");
  arrayAll = [];
  ketQua.innerHTML = "";
  ketQua1.innerHTML = "";
}

// Tìm số chẵn cuối cùng trong mảng
document.getElementById("timSo").addEventListener("click", findEven);

function findEven() {
  var evenEL = document.createElement("p");
  ketQua1.innerHTML = "";
  ketQua1.appendChild(evenEL);
  for (var i = arrayAll.length; i >= 0; i--) {
    if ((arrayAll[i] % 2 == 0) & (arrayAll[i] > 0)) {
      return (evenEL.innerHTML =
        "Số chẵn cuối cùng trong mảng: " + arrayAll[i]);
    }
  }
  return (evenEL.innerHTML = "Không tìm thấy số chẵn trong mảng: -1");
}

// Đổi vị trí 2 số trong mảng

document.getElementById("doiVitri").addEventListener("click", swap);
function swap(a, b) {
  var a = document.getElementById("viTri1").value;
  var b = document.getElementById("viTri2").value;
  ketQua.innerHTML = "";
  var swapEL = document.createElement("p");
  var c = arrayAll[a];
  arrayAll[a] = arrayAll[b];
  arrayAll[b] = c;
  swapEL.innerHTML = "Mảng mới sau khi đổi vị trí: [" + arrayAll + "]";
  ketQua.appendChild(swapEL);
}
//Sắp sếp mảng theo thứ tự tăng dần
document.getElementById("sapXep").addEventListener("click", sapXep);

function sapXep() {
  ketQua.innerHTML = "";
  var sortEL = document.createElement("p");
  arrayAll.sort(function (a, b) {
    return a - b;
  });
  sortEL.innerHTML = "Mảng mới sau khi sắp xếp: [" + arrayAll + "]";
  ketQua.appendChild(sortEL);
}

// Tìm số nguyên tố đầu tiên trong mảng

document.getElementById("soNguyenTo").addEventListener("click", lastNumber);

function lastNumber() {
  var soNTEL = document.createElement("p");
  ketQua1.innerHTML = "";
  ketQua1.appendChild(soNTEL);

  arrayAll = arrayAll.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  for (var j = 0; j <= arrayAll.length; j++) {
    if (arrayAll[j] >= 2) {
      return (soNTEL.innerHTML =
        "Số nguyên tố đầu tiên trong mảng: [" + arrayAll[j] + "]");
    }
    soNTEL.innerHTML = "Không tìm thấy số nguyên tố trong mảng: -1";
  }
}

// So sánh số âm và dương

document.getElementById("soSanh").addEventListener("click", compare);
function compare() {
  ketQua1.innerHTML = "";
  var amEL = document.createElement("p");
  var duongEL = document.createElement("p");
  var amduongEL = document.createElement("p");
  ketQua1.appendChild(amEL);
  ketQua1.appendChild(duongEL);
  ketQua1.appendChild(amduongEL);
  var soAm = 0;
  var soDuong = 0;
  for (var i = 0; i < arrayAll.length; i++) {
    if (arrayAll[i] < 0) {
      soAm++;
    } else if (arrayAll[i] > 0) {
      soDuong++;
    }
    amEL.innerHTML = "Số lượng số âm: " + soAm;
    duongEL.innerHTML = "Số lượng số dương: " + soDuong;
    if (soDuong > soAm) {
      amduongEL.innerHTML = "Số lương số dương nhiều hơn số lượng số âm";
    }
    if (soAm > soDuong) {
      amduongEL.innerHTML = "Số lương số âm nhiều hơn số lượng số dương";
    }
    if (soDuong === soAm) {
      amduongEL.innerHTML = "Số lương số dương bằng số lượng số âm";
    }
  }
}

//Đếm số nguyên trong mảng
document.getElementById("soThuc").addEventListener("click", soNguyen);
function soNguyen() {
  var soNguyenEL = document.createElement("p");
  ketQua1.innerHTML = "";
  ketQua1.appendChild(soNguyenEL);
  var soNguyen = 0;
  for (var i = 0; i < arrayAll.length; i++) {
    if (arrayAll[i] % 1 === 0) {
      soNguyen++;
      soNguyenEL.innerHTML = "Số lượng số nguyên: " + soNguyen;
    }
    if (arrayAll[i] % 1 != 0) {
      soNguyenEL.innerHTML = "Số lượng số nguyên: " + soNguyen;
    }
  }
}
