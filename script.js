let box = document.querySelector(".container");
let yourChoose = document.getElementById("yourChoose");
let systemChoose = document.getElementById("systemChoose");
let result = document.getElementById("result");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
function rockClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourChoose.innerHTML = rock.innerHTML;
	systemChoose.innerHTML = game[random];
	if (game[random] == rock.innerHTML) {
		result.innerHTML = "مساوی";
	} else if (game[random] == "قیچی") {
		result.innerHTML = "شما برنده شدید";
	} else {
		result.innerHTML = "سیستم برنده شد";
	}
	if (result.innerHTML == ".........." || result.innerHTML == "مساوی") {
		result.style.color = "#00aac0";
		box.style.boxShadow = "0 0 20px #ddd";
	} else if (result.innerHTML == "سیستم برنده شد") {
		result.style.color = "#ce0000";
		box.style.boxShadow = "0 0 20px #ce0000";
	} else {
		result.style.color = "#00c020";
		box.style.boxShadow = "0 0 20px #00c020";
	}
}
function paperClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourChoose.innerHTML = paper.innerHTML;
	systemChoose.innerHTML = game[random];
	if (game[random] == paper.innerHTML) {
		result.innerHTML = "مساوی";
	} else if (game[random] == "قیچی") {
		result.innerHTML = "سیستم برنده شد";
	} else {
		result.innerHTML = "شما برنده شدید";
	}
	if (result.innerHTML == ".........." || result.innerHTML == "مساوی") {
		result.style.color = "#00aac0";
		box.style.boxShadow = "0 0 20px #ddd";
	} else if (result.innerHTML == "سیستم برنده شد") {
		result.style.color = "#ce0000";
		box.style.boxShadow = "0 0 20px #ce0000";
	} else {
		result.style.color = "#00c020";
		box.style.boxShadow = "0 0 20px #00c020";
	}
}
function scissorsClick() {
	const game = ["قیچی", "کاغذ", "سنگ"];
	const random = Math.floor(Math.random() * game.length);
	yourChoose.innerHTML = scissors.innerHTML;
	systemChoose.innerHTML = game[random];
	if (game[random] == scissors.innerHTML) {
		result.innerHTML = "مساوی";
	} else if (game[random] == "سنگ") {
		result.innerHTML = "سیستم برنده شد";
	} else {
		result.innerHTML = "شما برنده شدید";
	}
	if (result.innerHTML == ".........." || result.innerHTML == "مساوی") {
		result.style.color = "#00aac0";
		box.style.boxShadow = "0 0 20px #ddd";
	} else if (result.innerHTML == "سیستم برنده شد") {
		result.style.color = "#ce0000";
		box.style.boxShadow = "0 0 20px #ce0000";
	} else {
		result.style.color = "#00c020";
		box.style.boxShadow = "0 0 20px #00c020";
	}
}
