var button = document.getElementsByClassName('button');
console.log(button.length);

function all () {
	for (var i = 0 ; i <= button.length ; i++) {
			alert(button[i].innerText);
	}
}

all();