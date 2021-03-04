const consoleOutput = document.querySelector('.console-output');

const ruls = [
	{ref: '[INFO]', className: '_bold _info'},
	{ref: '  at ', className: '_bold _error'},
	{ref: '[ERROR ->]', className: '_bold _error'},
	{ref: '[ERROR]', className: '_bold _error'},
	{ref: 'npm ERR!', className: '_bold _error'},
	{ref: 'FAILED', className: '_bold _error'},
	{ref: 'TypeError:', className: '_bold _error _italic'},
	{ref: 'HeadlessChrome', className: '_bold _selected'},
	{ref: 'WARN:', className: '_bold _warn'},
	{ref: 'Test failed', className: ' _bold _highlight'}
]

function applyRuls(ruls, text) {
	ruls.forEach(rul => {
		text = text.replaceAll(rul.ref, `<span class="${rul.className}">${rul.ref}</span>`);
	});
	return text;
}


let text = consoleOutput.innerHTML;
consoleOutput.innerHTML = applyRuls(ruls, text);
