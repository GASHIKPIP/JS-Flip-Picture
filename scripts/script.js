let img = document.querySelector("img")
let i = 0;
var arr = ['./img/img_1.jpeg', './img/img_2.jpg', './img/img_3.jpg', './img/img_4.jpeg']


function boom() {
	document.querySelector("img").src = arr[i]
	i++;

	if (i == arr.length) {
	i = 0;
	}

 }
