//zmienne
const grid = document.querySelector("#grid");
let pathWay;

function createGrid() {
	for (let i = 0; i < 400; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		square.classList.add(`square-${i}`);
		grid.append(square);
	}

	return console.log("tworzy siatkę");
}

createGrid();

function starterPoint() {
	const startSquare = document.querySelector(".square-209");
	console.log(startSquare);
	startSquare.classList.add("active");
	return console.log("stawia węża w środku");
}

starterPoint();

function move() {
	setInterval(() => {
		console.log("jest kierunek", pathWay);
	}, 1000);
	return console.log("wąz sie porusza");
}

function startMove() {
	if (pathWay) {
		console.log("ruszyłe w kierunku", pathWay);
		return move();
	}
}

//nasłuchiwanie obsługi klawiatury
document.addEventListener("keydown", e => {
	console.log("Keydown event code: ", e.code);
	pathWay = e.code;
	return startMove();
});
