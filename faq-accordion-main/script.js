const listItems = document.querySelectorAll('.list-item');

function ToggleAnswer(e) {
	listItems.forEach((listItem) => {
		const answer = listItem.querySelector('.answer');
		const minus = listItem.querySelector('.minus');
		const plus = listItem.querySelector('.plus');

		if (e.currentTarget !== listItem) {
			answer.classList.remove('open');
			minus.style.display = 'none';
			plus.style.display = 'block';
		} else {
			answer.classList.toggle('open');
			console.log(plus, minus);
			if (answer.classList.contains('open')) {
				console.log(answer.classList.contains('open'));
				plus.style.display = 'none';
				minus.style.display = 'block';
			} else {
				console.log(answer.classList.contains('open'));
				plus.style.display = 'block';
				minus.style.display = 'none';
			}
		}
	});
}
function init() {
	listItems.forEach((listItem) => {
		listItem.addEventListener('click', ToggleAnswer);
	});
}

init();
