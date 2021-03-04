const formBottomButtonsContainer = document.querySelector('.formBottomButtonsContainer')

let htmlBtn = document.createElement('button');
htmlBtn.innerText = 'Show Layaut';
formBottomButtonsContainer.append(htmlBtn);

let htmlLayout = document.createElement('div');
htmlLayout.className = 'layaut';

document.querySelector('.formBottomButtonsContainer button').className = 'pure-button ';


htmlBtn.addEventListener('click', (event) => {
	event.preventDefault();
	htmlLayout.innerHTML = document.querySelector('.resultContainer .pure-input-1.source-code').value;
	document.body.append(htmlLayout);
	htmlLayout.scrollIntoView({
		behavior: "smooth"
	});
});